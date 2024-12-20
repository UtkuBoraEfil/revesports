import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";

import { NextRequest, NextResponse } from "next/server";

type WebhookPayload = {
  tags: string[];
};

export async function POST(req: NextRequest) {
  try {
    if (!process.env.SANITY_REVALIDATE_SECRET) {
      return new Response("Missing env variable token", {
        status: 500,
      });
    }

    const { isValidSignature, body } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_REVALIDATE_SECRET,
      true
    );

    if (!isValidSignature) {
      const message = "Invalid signature";
      return new Response(
        JSON.stringify({
          message,
          isValidSignature,
          body,
        }),
        {
          status: 401,
        }
      );
    } else if (!Array.isArray(body?.tags) || !body.tags.length) {
      const message = "Bad Request";
      return new Response(JSON.stringify({ message, body }), { status: 400 });
    }

    body.tags.forEach((tag) => {
      revalidateTag(tag);
    });

    return NextResponse.json({ body });
  } catch (error) {
    console.error(error);
    return new Response((error as Error).message, { status: 500 });
  }
}
