import { StringLiteral } from "typescript";

// url: https://github.com/Linjiayu6/${name}
export interface IStructure {
    name: string;
    desc: string;
    link?: string;
}

export enum IKey {
    'FE' = 'FE',
    'AI' = 'AI',
    'BASIC' = 'BASIC'
}

const FE: IStructure[] = [
    {
        name: 'FE-Notes',
        desc: '[2020] Front-End Notebook',
    },
    {
        name: 'FE-RequestIdleCallback-demo',
        desc: '[2020] RequestIdleCallback / Lottie / Performance / React Fiber Experiment',
        link: 'https://linjiayu6.github.io/FE-RequestIdleCallback-demo/',
    },
    {
        name: 'FlappyBird',
        desc: '[2020] flappybird / canvas game',
        link: 'https://linjiayu6.github.io/FlappyBird/',
    },
    {
        name: 'Micro-Frontends',
        desc: '[2020] micro frontends / react / vue / single-spa',
    },
    {
        name: 'FlutterApp',
        desc: '[2019] [Flutter / Dart] Flutter in Practice (Wechat UI)',
    },
    {
        name: 'RN-APP',
        desc: '[2019][React Native] This is the code repository for learning RN',
    },
    {
        name: 'D3',
        desc: '[2019][D3/React] This is the code repository for learning D3',
        link: 'https://linjiayu6.github.io/D3/'
    },
    {
        name: 'Redux-Code',
        desc: '[2018][Redux] This is the code repository for learning Redux',
    },
    {
        name: 'Koa2-react-boilerplate',
        desc: '[2017] [Koa/React/Redux/Webpack] Generate a react boilerplate project',
    },
    {
        name: 'React-Redux',
        desc: '[2017] [React/Redux/Webpack/Node.js] Generate a react boilerplate project',
    },
    {
        name: 'Webpack',
        desc: '[2016] [Webpack] Webpack Demo',
    },
    {
        name: 'HKBU-Webpage',
        desc: '[2015] [JS] Redesign HKBU Webpage',
    }
]

const BASIC: IStructure[] = [
    {
        name: 'LeetCode',
        desc: '[2019+] CS Fundamentals: Algorithms and Data structures'
    },
    {
        name: 'Calculus-Notes',
        desc: '[2020] mathematics / calculus / integral / derivatives ...'
    }
]

const AI: IStructure[] = [
    {
        name: 'Deep-Learning',
        desc: '[2020] Deep Learning / Coursera',
    },
    {
        name: 'Machine-Learning-Practice',
        desc: '[2020] ML',
    },
    {
        name: 'Tensorflow.js-LinearRegression',
        desc: '[2019] [Tensorflow.js/React] Machine Learning in Front-end development',
        link: 'https://linjiayu6.github.io/Tensorflow.js-LinearRegression/',
    },
    {
        name: 'DL-BayesTheorem',
        desc: '[2019][Python/ Bayes / Naive Bayes Classifier]',
    },
    {
        name: 'Python-practice',
        desc: '[2019] WebCrawler/Python',
    },
    {
        name: 'RSA',
        desc: '[2015][RSA/Python] Implementation of the RSA algorithm in Python'
    }
]

export default {
    FE,
    AI,
    BASIC
};