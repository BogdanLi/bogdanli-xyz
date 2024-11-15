import CodeTemplate from "@/components/Templates/CodeTemplate";
import FadeIn from "@/components/UI/Animation/FadeIn";

const ProjectsPage = () => {
  return (
    <div className="h-full w-full">
      <CodeTemplate name="contacts" lines={0}>
        <FadeIn>
          <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/2cda33f4-cc3e-4202-a11b-008ce922fd67"
          ></iframe>
        </FadeIn>
      </CodeTemplate>
    </div>
  );
};

export default ProjectsPage;
