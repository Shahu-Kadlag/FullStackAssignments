import { Html, Body, Head, Heading, Hr, Container, Preview, Section, Text } from '@react-email/components';

interface QuoteRequestEmailProps {
  buyerName: string;
  companyName: string;
  email: string;
  whatsapp: string;
  country: string;
  product: string;
  quantity: string;
  destinationPort: string;
  message?: string;
  enquiryNumber: string;
}

export default function QuoteRequestEmail({
  buyerName,
  companyName,
  email,
  whatsapp,
  country,
  product,
  quantity,
  destinationPort,
  message,
  enquiryNumber,
}: QuoteRequestEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New B2B Enquiry: {product} from {companyName}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>AKOV Global - New RFQ</Heading>
          <Text style={text}>You have received a new request for quotation. Reference: <strong>{enquiryNumber}</strong></Text>
          <Hr style={hr} />

          <Section>
            <Heading style={h2}>Buyer Details</Heading>
            <Text style={text}><strong>Name:</strong> {buyerName}</Text>
            <Text style={text}><strong>Company:</strong> {companyName}</Text>
            <Text style={text}><strong>Country:</strong> {country}</Text>
            <Text style={text}><strong>Email:</strong> {email}</Text>
            <Text style={text}><strong>WhatsApp:</strong> {whatsapp}</Text>
          </Section>

          <Hr style={hr} />

          <Section>
            <Heading style={h2}>Requirement</Heading>
            <Text style={text}><strong>Product:</strong> {product}</Text>
            <Text style={text}><strong>Quantity:</strong> {quantity}</Text>
            <Text style={text}><strong>Destination Port:</strong> {destinationPort}</Text>
            <Text style={text}><strong>Additional Message:</strong> {message || 'None'}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = { backgroundColor: '#f6f9fc', fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif' };
const container = { backgroundColor: '#ffffff', margin: '0 auto', padding: '20px 0 48px', marginBottom: '64px' };
const h1 = { color: '#0A192F', fontSize: '24px', fontWeight: 'bold', padding: '0 48px', margin: '30px 0' };
const h2 = { color: '#2E7D32', fontSize: '18px', fontWeight: 'bold', padding: '0 48px', margin: '20px 0 10px' };
const text = { color: '#333', fontSize: '14px', margin: '10px 48px' };
const hr = { borderColor: '#e6ebf1', margin: '20px 0' };
