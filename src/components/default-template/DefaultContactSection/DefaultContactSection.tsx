import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

import { EMAIL_ADDRESS, GITHUB_URL, LINKEDIN_URL } from "constants/links";
import GithubIcon from "icons/GithubIcon";
import LinkedinIcon from "icons/LinkedinIcon";
import MailIcon from "icons/MailIcon";
// Import WhatsApp icon
import { Section } from "shared/Section";

import { DefaultContactItem } from "./DefaultContactItem";

// Add WhatsApp number constant
const WHATSAPP_NUMBER = "03445208419";

export const DefaultContactSection = () => {
  return (
    <Section id="contact" headingText="Contact">
      <div className="flex flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flex lg:flex-row xl:flex xl:flex-row w-full gap-[60px] mt-[7px]">
        <CopyToClipboard text={EMAIL_ADDRESS}>
          <DefaultContactItem
            icon={<MailIcon />}
            title="Email address"
            text={EMAIL_ADDRESS}
            buttonText="Copy to clipboard"
          />
        </CopyToClipboard>
        <DefaultContactItem icon={<FaWhatsapp />} title="WhatsApp" text={WHATSAPP_NUMBER} />
        <DefaultContactItem icon={<LinkedinIcon />} title="LinkedIn" href={LINKEDIN_URL} />
        <DefaultContactItem icon={<GithubIcon />} title="GitHub" href={GITHUB_URL} />
      </div>
    </Section>
  );
};
