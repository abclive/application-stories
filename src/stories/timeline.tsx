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
    {component: <Greet/>, time: 12},
    {component: <Intro/>, time: 12},
    {component: <Studies/>, time: 12},
    {component: <DocExperience/>, time: 12},
    {component: <CollectiveExperience/>, time: 12},
    {component: <Projects/>, time: 15},
    {component: <Summary/>, time: 9},
    {component: <CodeReview/>, time: 8},
    {component: <Contact/>, time: 20}
];