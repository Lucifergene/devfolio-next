import { PostItemProps } from "../../typings";

export const posts: PostItemProps[] = [
  {
    title: "Diagnosis of Covid-19 Cases with X-ray Images Using MLOps",
    href: "https://link.springer.com/chapter/10.1007/978-981-19-4182-5_13",
    category: {
      name: "Springer Nature",
      color: "bg-orange-500 text-white",
    },
    description:
      "In this paper, the authors have proposed a method through which the process of Hyper Parameter Tuning of the Deep Learning Models can be automated using the concept of MLOps.",
    authors: [
      {
        name: "Avik Kundu",
        role: "Author",
      },
      {
        name: "Saurabh Bilgaiyan",
        role: "Co-Author and Mentor",
      },
    ],
  },
  {
    title: "Diagnosis of Radiological Images using Mask R-CNN",
    href: "https://ieeexplore.ieee.org/document/9445190",
    category: {
      name: "IEEE Xplore",
      color: "bg-blue-600 text-white",
    },
    description:
      "In this study, the authors have described a Mask R-CNN (region-based convolution neural network) approach for the detection of the ground glass opacities (GGOs) in chest CT images of COVID-19 infected persons.",
    authors: [
      {
        name: "Avik Kundu",
        role: "Author",
      },
      {
        name: "Chandan Mishra",
        role: "Co-Author",
      },
      {
        name: "Saurabh Bilgaiyan",
        role: "Co-Author and Mentor",
      },
    ],
  },
  {
    title: "Framework for Selection of the IoT Device on Execution Context",
    href: "https://ieeexplore.ieee.org/abstract/document/9753535/",
    category: {
      name: "IEEE Xplore",
      color: "bg-blue-600 text-white",
    },
    description:
      "In this study, the authors propose a novel framework to select the most suitable device for performing the task, based on execution context.",
    authors: [
      {
        name: "Avik Kundu",
        role: "Author",
      },
      {
        name: "Sankalp Nayak",
        role: "Co-Author",
      },
      {
        name: "Sourabh Tiwari",
        role: "Co-Author and Mentor",
      },
    ],
  },
];
