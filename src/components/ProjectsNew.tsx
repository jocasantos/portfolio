import { Box, Stack, Text } from "@chakra-ui/react";
import ProjectCarousel from "./ProjectCarousel";
import SladWebsite from "../assets/slad_project_img.jpeg";
import GamesHub from "../assets/games-hub.jpeg";
import MuscleTracker from "../assets/MuscleTracker.jpeg";
import DevOps from "../assets/DevOps.png";
import ConfigurationManagement from "../assets/ConfigurationManagement.png";
import ScriptShell from "../assets/ScriptShell.png";
import terraformbasic from "../assets/terraformbasic.png";
import jenkinsBasic from "../assets/jenkinsBasic.png";
import githubActions from "../assets/githubActions.png";
import dockerproject2 from "../assets/dockerproject2.png";
import k8sMonit from "../assets/k8s-monit.png";
import jenkinsPipe from "../assets/jenkins-pipe.png";
import k8s_eks from "../assets/k8s_eks.png";
import aws_cost_opti from "../assets/aws-cost-opti.png";
import eks_helm from "../assets/eks-helm.png";
import vpc_diagram from "../assets/vpc-diagram.png";
import lp from "../assets/lp.png";

const Projects = () => {
  // Apps I Built
  const appsProjects = [
    {
      img: lp,
      text: "LiftyPost.com",
      text2: "Transform YouTube Videos into Engaging Posts",
      link: "https://liftypost.com/",
      link2: "https://liftypost.com/",
    },
    {
      img: MuscleTracker,
      text: "Muscle Tracker",
      text2: "NextJS, TypeScript, MongoDB, shadcn/ui, Tailwind, Clerk, Stripe, Vercel",
      link: "https://www.muscletracker.fit/",
      link2: "https://github.com/jocasantos/gym-plans",
    },
    {
      img: GamesHub,
      text: "Video Games Library",
      text2: "React, TypeScript, Chakra UI",
      link: "https://game-grove.vercel.app/",
      link2: "https://github.com/jocasantos/game-hub",
    },
    {
      img: SladWebsite,
      text: "Local Team's Website",
      text2: "HTML, CSS, JavaScript",
      link: "https://jocasantos.github.io/SLAD",
      link2: "https://github.com/jocasantos/SLAD",
    },
  ];

  // DevOps Projects
  const devopsProjects = [
    {
      img: eks_helm,
      text: "EKS / Kubernetes Project",
      text2: "EKS, AWS, Helm, Kubernetes, ALB, Ingress Controller",
      link: "https://github.com/jocasantos/3-tier-app-eks",
      link2: "https://github.com/jocasantos/3-tier-app-eks",
    },
    {
      img: jenkinsPipe,
      text: "End-to-end CI/CD Pipeline",
      text2: "Jenkins, SonarQube, Kubernetes, Argo CD, Docker",
      link: "https://github.com/jocasantos/jenkins-end-to-end-cicd",
      link2: "https://github.com/jocasantos/jenkins-end-to-end-cicd",
      imgStyle: { objectFit: "contain" },
    },
    {
      img: aws_cost_opti,
      text: "AWS Cost Optimization",
      text2: "AWS, Lambda, Python, CloudWatch",
      link: "https://github.com/jocasantos/aws-cloud-cost-optimization/",
      link2: "https://github.com/jocasantos/aws-cloud-cost-optimization/",
    },
    {
      img: vpc_diagram,
      text: "Terraform Project",
      text2: "Terraform, AWS, Load Balancer, VPC, EC2, Shell Scripting",
      link: "https://github.com/jocasantos/terraform-aws-project",
      link2: "https://github.com/jocasantos/terraform-aws-project",
      imgStyle: { objectFit: "contain" },
    },
    {
      img: k8s_eks,
      text: "EKS Project",
      text2: "AWS, EKS, Helm, Load Balancer, Kubernetes, Ingress Controller",
      link: "https://github.com/jocasantos/eks-project",
      link2: "https://github.com/jocasantos/eks-project",
    },
    {
      img: k8sMonit,
      text: "Observability Project",
      text2: "Kubernetes, Prometheus, Grafana, Helm",
      link: "https://github.com/jocasantos/how-to-setup-prometheus-and-grafana-in-k8s",
      link2: "https://github.com/jocasantos/how-to-setup-prometheus-and-grafana-in-k8s",
    },
    {
      img: dockerproject2,
      text: "Docker Project",
      text2: "Docker, Docker Compose, Linux, MERN Stack",
      link: "https://github.com/jocasantos/docker-mern-app-with-and-without-docker-compose",
      link2: "https://github.com/jocasantos/docker-mern-app-with-and-without-docker-compose",
    },
    {
      img: githubActions,
      text: "GitHub Actions Project",
      text2: "GitHub Actions, AWS, EC2, CI/CD, Python",
      link: "https://github.com/jocasantos/github-actions-self-host-runner-example",
      link2: "https://github.com/jocasantos/github-actions-self-host-runner-example",
    },
    {
      img: jenkinsBasic,
      text: "Jenkins Project",
      text2: "Jenkins, Docker, Git, AWS, Bash",
      link: "https://github.com/jocasantos/jenkins-simple-pipeline-docker",
      link2: "https://github.com/jocasantos/jenkins-simple-pipeline-docker",
    },
    {
      img: terraformbasic,
      text: "Terraform Project",
      text2: "Terraform, AWS, EC2, S3, DynamoDB",
      link: "https://github.com/jocasantos/terraform-local-and-remote-state",
      link2: "https://github.com/jocasantos/terraform-local-and-remote-state",
    },
    {
      img: ConfigurationManagement,
      text: "Ansible Project",
      text2: "Ansible, AWS, EC2, SSH, Linux",
      link: "https://github.com/jocasantos/how-to-manage-remote-servers-with-ansible",
      link2: "https://github.com/jocasantos/how-to-manage-remote-servers-with-ansible",
    },
    {
      img: DevOps,
      text: "AWS Project",
      text2: "AWS, EC2, Security Groups, IAM, SSH, Linux, SHELL",
      link: "https://github.com/jocasantos/aws-nodejs-app-demo",
      link2: "https://github.com/jocasantos/aws-nodejs-app-demo",
    },
    {
      img: ScriptShell,
      text: "SHELL Project",
      text2: "AWS CLI, S3, Linux, SHELL",
      link: "https://github.com/jocasantos/CloudUploaderCLI",
      link2: "https://github.com/jocasantos/CloudUploaderCLI",
    },
  ];

  return (
    <Stack
      id="Projects"
      bg="white"
      h="100%"
      align={"center"}
      direction={"column"}
      py={8}
    >
      <Text
        fontWeight="500"
        letterSpacing={-1}
        fontSize={"medium"}
        color={"RGBA(0, 0, 0, 0.36)"}
      >
        Browse My Recent
      </Text>
      <Text
        mt={-2}
        letterSpacing={1}
        fontSize={"xx-large"}
        as={"b"}
        color={"black"}
        mb={8}
      >
        Projects
      </Text>

      {/* Apps I Built Carousel */}
      <Box w="100%" mb={16}>
        <ProjectCarousel title="Apps I Built" projects={appsProjects} />
      </Box>

      {/* DevOps Projects Carousel */}
      <Box w="100%">
        <ProjectCarousel title="DevOps Projects" projects={devopsProjects} />
      </Box>
    </Stack>
  );
};

export default Projects;
