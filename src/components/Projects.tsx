import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
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

const Projects = () => {
  return (
    <Stack
      id="Projects"
      bg="white"
      h="100%"
      align={"center"}
      direction={"column"}
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
      >
        Projects
      </Text>
      <Box mt={4} />
      <Flex>
        <ProjectCard

          img={eks_helm} //i want to stretch this image
          text="EKS / Kubernetes Project"
          text2="EKS, AWS, Helm, Kubernetes, ALB, Ingress Controller"
          link="https://github.com/jocasantos/3-tier-app-eks"
          link2="https://github.com/jocasantos/3-tier-app-eks"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard

          img={jenkinsPipe} //i want to stretch this image
          imgStyle={{ objectFit: "contain" }}
          text="End-to-end CI/CD Pipeline"
          text2="Jenkins, SonarQube, Kubernetes, Argo CD, Docker"
          link="https://github.com/jocasantos/jenkins-end-to-end-cicd"
          link2="https://github.com/jocasantos/jenkins-end-to-end-cicd"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={aws_cost_opti}
          text="AWS Cost Optimization"
          text2="AWS, Lambda, Python, CloudWatch"
          link="https://github.com/jocasantos/aws-cloud-cost-optimization/"
          link2="https://github.com/jocasantos/aws-cloud-cost-optimization/"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={vpc_diagram}
          imgStyle={{ objectFit: "contain" }}
          text="Terraform Project"
          text2="Terraform, AWS, Load Balancer, VPC, EC2, Shell Scripting"
          link="https://github.com/jocasantos/terraform-aws-project"
          link2="https://github.com/jocasantos/terraform-aws-project"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={k8s_eks}
          text="EKS Project"
          text2="AWS, EKS, Helm, Load Balancer, Kubernetes, Ingress Controller"
          link="https://github.com/jocasantos/eks-project"
          link2="https://github.com/jocasantos/eks-project"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={k8sMonit}
          text="Observability Project"
          text2="Kubernetes, Prometheus, Grafana, Helm"
          link="https://github.com/jocasantos/how-to-setup-prometheus-and-grafana-in-k8s"
          link2="https://github.com/jocasantos/how-to-setup-prometheus-and-grafana-in-k8s"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={dockerproject2}
          text="Docker Project"
          text2="Docker, Docker Compose, Linux, MERN Stack"
          link="https://github.com/jocasantos/docker-mern-app-with-and-without-docker-compose"
          link2="https://github.com/jocasantos/docker-mern-app-with-and-without-docker-compose"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={githubActions}
          text="GitHub Actions Project"
          text2="GitHub Actions, AWS, EC2, CI/CD, Python"
          link="https://github.com/jocasantos/github-actions-self-host-runner-example"
          link2="https://github.com/jocasantos/github-actions-self-host-runner-example"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={jenkinsBasic}
          text="Jenkins Project"
          text2="Jenkins, Docker, Git, AWS, Bash"
          link="https://github.com/jocasantos/jenkins-simple-pipeline-docker"
          link2="https://github.com/jocasantos/jenkins-simple-pipeline-docker"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={terraformbasic}
          text="Terraform Project"
          text2="Terraform, AWS, EC2, S3, DynamoDB"
          link="https://github.com/jocasantos/terraform-local-and-remote-state"
          link2="https://github.com/jocasantos/terraform-local-and-remote-state"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={ConfigurationManagement}
          text="Ansible Project"
          text2="Ansible, AWS, EC2, SSH, Linux"
          link="https://github.com/jocasantos/how-to-manage-remote-servers-with-ansible"
          link2="https://github.com/jocasantos/how-to-manage-remote-servers-with-ansible"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={DevOps}
          text="AWS Project"
          text2="AWS, EC2, Security Groups, IAM, SSH, Linux, SHELL"
          link="https://github.com/jocasantos/aws-nodejs-app-demo"
          link2="https://github.com/jocasantos/aws-nodejs-app-demo"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={ScriptShell}
          text="SHELL Project"
          text2="AWS CLI, S3, Linux, SHELL"
          link="https://github.com/jocasantos/CloudUploaderCLI"
          link2="https://github.com/jocasantos/CloudUploaderCLI"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={MuscleTracker}
          text="Muscle Tracker"
          text2="NextJS, TypeScript, MongoDB, shadcn/ui, Tailwind, Clerk, Stripe, Vercel"
          link="https://www.muscletracker.fit/"
          link2="https://github.com/jocasantos/gym-plans"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={GamesHub}
          text="Video Games Library"
          text2="React, TypeScript, Chakra UI"
          link="https://game-grove.vercel.app/"
          link2="https://github.com/jocasantos/game-hub"
        />
      </Flex>
      <Box mt={4} />
      <Flex>
        <ProjectCard
          img={SladWebsite}
          text="Local Team's Website"
          text2="HTML, CSS, JavaScript"
          link="https://jocasantos.github.io/SLAD"
          link2="https://github.com/jocasantos/SLAD"
        />
      </Flex>
    </Stack>
  );
};

export default Projects;
