import { Component }            from 'react';
import Slider                   from './components/slider/slider.js';
import ServicesSection          from './components/section/services/servicesSection.js';
import FeatureSection           from './components/section/feature/featureSection.js';
import RequestAdviceSection     from './components/section/requestAdvice/requestAdviceSection.js';
import WhyChooseUsSection       from './components/section/whyChooseUs/whyChooseUsSection.js';
import MethodSection            from './components/section/method/methodSection';
import Head                     from 'next/head';

export default class App extends Component {

    render() {
        return(
            <div>
                <Head>
                    <title>Nguyễn Trọng Tộc</title>
                </Head>
                <Slider />
                <ServicesSection/>
                <MethodSection />
                <FeatureSection />
            </div>
        )
    };
}
