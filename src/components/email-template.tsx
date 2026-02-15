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
    subject?: string;
    message?: string; 
}

export const WelcomeEmail = ({
    username = "Nicole",
    useremail = "Helix",
    subject,
    message,
}: WelcomeEmailProps) => {
    const previewText = `Welcome to ${useremail}, ${username}!`;

    return (
    <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Body style={{ backgroundColor: 'white', margin: 'auto', fontFamily: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'" }}>
        <Container style={{ marginBottom: '40px', marginLeft: 'auto', marginRight: 'auto', padding: '20px', width: '465px' }}>
            <Section style={{ marginTop: '40px' }}>
            <Img
                src={'/imagens/logo.png'}
                width="60"
                height="60"
                alt="Logo Example"
                style={{ margin: '0', marginLeft: 'auto', marginRight: 'auto' }}
            />
          </Section>
          <Heading style={{ fontSize: '24px', color: 'dark-blue', fontWeight: 'normal', textAlign: 'center', margin: '0', marginTop: '32px', marginLeft: '0', marginRight: '0' }}>
            Novo contato recebido
          </Heading>
          <Text className="text-gray-600 mb-6">
              Você recebeu uma nova mensagem através do formulário do site.
              Confira os detalhes abaixo:
            </Text>
          <Text style={{ textAlign: 'start', fontSize: '14px', color: 'black' }}>
            Nome: {username}
          </Text>
          <Text style={{ textAlign: 'start', fontSize: '14px', color: 'black' }}>
            Email: {useremail}
          </Text>
          <Text style={{ textAlign: 'start', fontSize: '14px', color: 'black' }}>
            Asunto: {subject}
          </Text>
          <Text style={{ textAlign: 'start', fontSize: '14px', color: 'black' }}>
            Mensagem: {message}
          </Text>
        </Container>
      </Body>
    </Html>
  );
};

export default WelcomeEmail;