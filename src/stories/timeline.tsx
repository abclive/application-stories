import DocExperience from "./content/DocExperience";
import Greet from "./content/Greet";
import Intro from './content/Intro';
import Studies from "./content/Education";
import CollectiveExperience from "./content/CollectiveExperience";
import Summary from "./content/Summary";
import CodeReview from "./content/CodeReview";
import Contact from "./content/Contact";
import Projects from "./content/Projects";

export const stories = [
    {component: <Greet/>, time: 20},
    {component: <Intro/>, time: 20},
    {component: <Studies/>, time: 20},
    {component: <DocExperience/>, time: 20},
    {component: <CollectiveExperience/>, time: 20},
    {component: <Projects/>, time: 22},
    {component: <Summary/>, time: 13},
    {component: <CodeReview/>, time: 12},
    {component: <Contact/>, time: 20}
];