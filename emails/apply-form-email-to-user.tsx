import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Img,
  Text,
  Section,
  Button,
  Hr,
} from "@react-email/components";

import * as React from "react";

interface ApplyFormEmailToUserProps {
  userFirstname: string;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const ApplyFormEmailToUser = ({
  userFirstname,
}: ApplyFormEmailToUserProps) => (
  <Html>
    <Head />
    <Preview>Revesport'a sporcu bursu başvurunuz ulaştı!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          // src={`${baseUrl}/email/logo.png`}
          src="https://i.ibb.co/zSzPY88/logo.png"
          width="100"
          height="100"
          alt="Revesport"
          style={logo}
        />
        <Text style={paragraph}>Merhaba {userFirstname},</Text>
        <Text style={paragraph}>
          Başvurun bize ulaştı. Bu yolculukta bizi seçtiğin için teşekkür
          ediyoruz. En kısa sürede geri dönüş yapacağız. Bu arada herhangi bir
          sorun olursa info@reve-sport.com adresinden bize ulaşabilirsin.
        </Text>
        <Section style={btnContainer}>
          <Button
            style={button}
            href="mailto:info@reve-sport.com"
          >
            Bize ulaş!
          </Button>
        </Section>
        <Text style={paragraph}>
          Teşekkürler,
          <br />
          Revesport Ekibi
        </Text>
        <Hr style={hr} />
        <Text style={footer}>https://www.reve-sport.com</Text>
      </Container>
    </Body>
  </Html>
);

ApplyFormEmailToUser.PreviewProps = {
  userFirstname: "Arda",
} as ApplyFormEmailToUserProps;

export default ApplyFormEmailToUser;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#5F51E8",
  borderRadius: "3px",
  color: "#fff",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
