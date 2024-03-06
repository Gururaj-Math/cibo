import { Typography, Divider } from "antd";

const { Title, Paragraph } = Typography;

const TermsAndConditions = () => {
  return (
    <div style={{ padding: "80px" }}>
      <Title level={2}>Terms and Conditions</Title>
      <Divider />
      <Paragraph style={{fontSize: "20px"}}>
        Welcome to Cibo! These terms and conditions outline the rules and
        regulations for the use of our food delivery application.
      </Paragraph>
      <Paragraph style={{fontSize: "20px"}}>
        By accessing this app we assume you accept these terms and conditions.
        Do not continue to use Cibo if you do not agree to take all of the terms
        and conditions stated on this page.
      </Paragraph>
      <Paragraph style={{fontSize: "20px"}}>
        The following terminology applies to these Terms and Conditions,
        Privacy Statement and Disclaimer Notice and all Agreements: "Client",
        "You" and "Your" refers to you, the person log on this app and compliant
        to the Company's terms and conditions.
      </Paragraph>
      <Title level={3}>Cookies</Title>
      <Paragraph style={{fontSize: "20px"}}>
        We employ the use of cookies. By accessing Cibo, you agreed to use
        cookies in agreement with the Cibo's Privacy Policy.
      </Paragraph>
      <Paragraph style={{fontSize: "20px"}}>
        Most interactive websites use cookies to let us retrieve the user’s
        details for each visit. Cookies are used by our website to enable the
        functionality of certain areas to make it easier for people visiting
        our website.
      </Paragraph>
      <Title level={3}>License</Title>
      <Paragraph style={{fontSize: "20px"}}>
        Unless otherwise stated, Cibo and/or its licensors own the intellectual
        property rights for all material on Cibo. All intellectual property
        rights are reserved.
      </Paragraph>
      
    </div>
  );
};

export default TermsAndConditions;
