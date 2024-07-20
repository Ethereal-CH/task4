import React from 'react';
import { Html, Head, Body, Container, Section, Row, Column, Text, Image, Link } from '@react-email/components';

const NewsletterTemplate = ({ title, name, image, content, learnMoreLink }) => (
  <Html>
    <Head />
    <Body>
      <Container>
        <Section>
          <Row>
            <Column>
              <Text>
                {title}
              </Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Image/>
            </Column>
          </Row>
          <Row>
            <Column>
                {content}
              </Text>
            </Column>
          </Row>
          <Row>
            <Column>
              <Link href={learnMoreLink} style={{ display: 'inline-block', padding: '10px 20px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}>
                Learn More
              </Link>
            </Column>
          </Row>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default NewsletterTemplate;