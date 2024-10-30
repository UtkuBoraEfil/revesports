import { ScholarshipFormSchema } from "@/components/forms/form-schemas";
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

interface ApplyFormEmailToAdminProps {
  input: ScholarshipFormSchema;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const ApplyFormEmailToAdmin = ({
  input,
}: ApplyFormEmailToAdminProps) => {
  const formatClubExperience = () => {
    if (!input.clubExperience.hasExperience) return "Yok";
    return input.clubExperience.details
      ?.map((detail) => `${detail.teamName} (${detail.yearsPlayed} yıl)`)
      .join(", ");
  };

  const formatNationalTeamExperience = () => {
    if (!input.nationalTeamExperience.hasExperience) return "Yok";
    return input.nationalTeamExperience.details
      ?.map((detail) => `${detail.teamName} (${detail.year})`)
      .join(", ");
  };

  const formatLangExams = () => {
    if (!input.langExams.hasExam) return "Yok";
    return input.langExams.details
      .map(
        (detail) =>
          `${detail.examName === "Diğer" ? detail.otherExamName : detail.examName}: ${detail.score}`
      )
      .join(", ");
  };

  const formatHighlightVideos = () => {
    if (!input.highlightVideo.hasVideo) return "Yok";
    return input.highlightVideo.details.map((detail) => detail.url).join(", ");
  };

  return (
    <Html>
      <Head />
      <Preview>Revesport'a yeni sporcu bursu başvurusu geldi!</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src={`${baseUrl}/email/logo.png`}
            width="100"
            height="100"
            alt="Revesport"
            style={logo}
          />
          <Text style={paragraph}>Selamlar Işıl Hanım,</Text>
          <Text style={paragraph}>
            Bir kişi daha sporcu bursu başvurusunda bulundu, aşağıda formu
            dolduran kişi hakkında kısa bir özet var.
          </Text>
          <Hr style={hr} />
          <Section>
            <table style={tableStyle}>
              <tbody>
                <tr>
                  <td style={headerStyle}>İsim</td>
                  <td style={cellStyle}>{input.name}</td>
                </tr>
                <tr>
                  <td style={headerStyle}>Email</td>
                  <td style={cellStyle}>{input.email}</td>
                </tr>
                <tr>
                  <td style={headerStyle}>Instagram</td>
                  <td style={cellStyle}>@{input.instagramUsername}</td>
                </tr>
                <tr>
                  <td style={headerStyle}>Cinsiyet</td>
                  <td style={cellStyle}>
                    {input.gender.slice(0, 1).toUpperCase() +
                      input.gender.slice(1)}
                  </td>
                </tr>
                <tr>
                  <td style={headerStyle}>Doğum Tarihi</td>
                  <td style={cellStyle}>
                    {new Date(input.dob).toLocaleDateString("tr-TR")}
                  </td>
                </tr>
                <tr>
                  <td style={headerStyle}>Boy</td>
                  <td style={cellStyle}>{input.height} cm</td>
                </tr>
                <tr>
                  <td style={headerStyle}>Telefon</td>
                  <td style={cellStyle}>{input.phone}</td>
                </tr>
                <tr>
                  <td style={headerStyle}>Eğitim</td>
                  <td style={cellStyle}>{input.education}</td>
                </tr>
                <tr>
                  <td style={headerStyle}>Pozisyonlar</td>
                  <td style={cellStyle}>{input.positions.join(", ")}</td>
                </tr>
                <tr>
                  <td style={headerStyle}>Kulüp Deneyimi</td>
                  <td style={cellStyle}>{formatClubExperience()}</td>
                </tr>
                <tr>
                  <td style={headerStyle}>Milli Takım Deneyimi</td>
                  <td style={cellStyle}>{formatNationalTeamExperience()}</td>
                </tr>
                <tr>
                  <td style={headerStyle}>Dil Sınavları</td>
                  <td style={cellStyle}>{formatLangExams()}</td>
                </tr>
                <tr>
                  <td style={headerStyle}>Video</td>
                  <td style={cellStyle}>{formatHighlightVideos()}</td>
                </tr>
              </tbody>
            </table>
          </Section>
          <Hr style={hr} />
          <Text style={paragraph}>©️ Revesport</Text>
        </Container>
      </Body>
    </Html>
  );
};

ApplyFormEmailToAdmin.PreviewProps = {
  input: {
    name: "Arda",
    email: "ardakaanaydilek@gmail.com",
    instagramUsername: "ardakaanaydilek",
    gender: "erkek",
    dob: new Date(),
    height: 170,
    phone: "555 123 4567",
    education: "Yüksek Okul",
    positions: [
      "Setter (S)",
      "Outside Hitter (OH)",
      "Opposite Hitter (Opp or RS)",
    ],
    clubExperience: {
      hasExperience: true,
      details: [
        {
          teamName: "Arda",
          yearsPlayed: 2,
        },
        {
          teamName: "Arda",
          yearsPlayed: 4,
        },
      ],
    },
    nationalTeamExperience: {
      hasExperience: true,
      details: [
        {
          teamName: "Arda",
          year: 2023,
        },
        {
          teamName: "Arda",
          year: 2024,
        },
      ],
    },
    langExams: {
      hasExam: true,
      details: [
        {
          examName: "TOEFL",
          score: 100,
        },
        {
          examName: "IELTS",
          score: 100,
        },
        {
          examName: "Diğer",
          otherExamName: "Diger Test",
          score: 100,
        },
      ],
    },
    highlightVideo: {
      hasVideo: true,
      details: [
        {
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
        {
          url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        },
      ],
    },
  },
} as ApplyFormEmailToAdminProps;

export default ApplyFormEmailToAdmin;

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

const hr = {
  borderColor: "#cccccc",
  margin: "10px 0",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse" as const,
  marginBottom: "20px",
};

const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left" as const,
};

const headerStyle = {
  ...cellStyle,
  backgroundColor: "#f8f9fa",
  fontWeight: "bold",
};
