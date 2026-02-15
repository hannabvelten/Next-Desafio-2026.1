import * as React from 'react';

interface EmailTemplateProps {
    firstName: string;
}

export function EmailTemplate({ firstName }: EmailTemplateProps) {
    return (
        <div>
            <h1>Welcome, {firstName}!</h1>
        </div>
    );
}

import { Body, Button, Container, Head, Heading, Html, Img, Preview, Section, Text } from '@react-email/components';

interface WelcomeEmailProps {
    username?: string;
    useremail?: string;
}

export const WelcomeEmail = ({
    username = "Nicole",
    useremail = "Helix",
}: WelcomeEmailProps) => {
    const previewText = `Welcome to ${useremail}, ${username}!`;

    return (
    <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Body style={{ backgroundColor: 'black', margin: 'auto', fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'" }}>
        <Container style={{ marginBottom: '40px', marginLeft: 'auto', marginRight: 'auto', padding: '20px', width: '465px' }}>
            <Section style={{ marginTop: '40px' }}>
            <Img
                src={`https://example.com/brand/example-logo.png`}
                width="60"
                height="60"
                alt="Logo Example"
                style={{ margin: '0', marginLeft: 'auto', marginRight: 'auto' }}
            />
          </Section>
          <Heading style={{ fontSize: '24px', color: 'white', fontWeight: 'normal', textAlign: 'center', margin: '0', marginTop: '32px', marginLeft: '0', marginRight: '0' }}>
            Welcome to <strong>{useremail}</strong>, {username}!
          </Heading>
          <Text style={{ textAlign: 'start', fontSize: '14px', color: 'white' }}>
            Hello {username},
          </Text>
          <Text style={{ textAlign: 'start', fontSize: '14px', color: 'white', lineHeight: '1.625' }}>
            We re excited to have you onboard at <strong>{useremail}</strong>.
            We hope you enjoy your journey with us. If you have any questions
            or need assistance, feel free to reach out.
          </Text>
          <Section style={{ textAlign: 'center', marginTop: '32px', marginBottom: '32px' }}>
            <Button
              style={{ padding: '10px 20px', backgroundColor: 'white', borderRadius: '6px', color: 'black', fontSize: '14px', fontWeight: 'semibold', textDecoration: 'none', textAlign: 'center' }}
              href={`https://example.com/get-started`}
            >
              Get Started
            </Button>
          </Section>
          <Text style={{ textAlign: 'start', fontSize: '14px', color: 'white' }}>
            Cheers,
            <br />
            The {useremail} Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;