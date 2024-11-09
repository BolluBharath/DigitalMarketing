import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';
import { Service } from '../_models/service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  services: Service[] = [
    {
      id: 1,
      name: "Digital Marketing Strategy",
      summary: "A comprehensive digital marketing strategy service using data-driven methods to enhance online visibility and customer engagement.",
      description: "This service focuses on building a personalized digital marketing strategy aimed at maximizing online presence and brand awareness. Our team will perform an in-depth analysis of your market, competitors, and audience to develop a custom plan. We utilize metrics from Google Analytics, engagement rates, conversion tracking, and advanced SEO techniques. We manage campaigns across platforms, ensuring consistent brand voice and targeted messaging to boost ROI. We also provide ongoing optimization, tracking KPIs, and adjusting strategies to adapt to market trends.",
      tags: [Tag.DIGITAL_MARKETING, Tag.ANALYTICS, Tag.STRATEGY, Tag.SEO, Tag.CONTENT_CREATION],
      pictures: ["../../assets/digital_marketing01.png", "../../assets/digital_marketing02.jpg"]
    },
    {
      id: 2,
      name: "SEO Optimization",
      summary: "A robust SEO service to improve website visibility and ranking on search engines like Google and Bing.",
      description: "Our SEO Optimization service enhances your search engine ranking through on-page and off-page SEO strategies. We perform comprehensive keyword research, competitor analysis, and on-site optimizations (meta tags, alt tags, headings, internal links). Additionally, we create high-quality backlinks, optimize local SEO, and provide ongoing content suggestions. The service also includes tracking with SEO tools and Google Analytics to measure traffic, conversions, and ROI.",
      tags: [Tag.SEO, Tag.KEYWORD_RESEARCH, Tag.CONTENT_STRATEGY, Tag.BACKLINKS, Tag.LOCAL_SEO],
      pictures: ["../../assets/seo_optimization01.png", "../../assets/seo_optimization02.png"]
    },
    {
      id: 3,
      name: "Website Design",
      summary: "Creating visually appealing and user-friendly websites that reflect brand identity and drive engagement.",
      description: "Our Website Design service involves building responsive, modern websites tailored to your brand and audience. From conceptual design to deployment, we ensure websites are both visually captivating and optimized for conversions. We incorporate UX/UI best practices, SEO-friendly structure, fast load times, and mobile responsiveness. Each site is tailored to improve customer engagement and facilitate seamless navigation, ensuring an enjoyable and memorable user experience.",
      tags: [Tag.WEBSITE_DESIGN, Tag.UX_UI, Tag.WEB_DEVELOPMENT, Tag.RESPONSIVE_DESIGN, Tag.CONVERSION_OPTIMIZATION],
      pictures: ["../../assets/website_design01.png", "../../assets/website_design02.png"]
    },
    {
      id: 4,
      name: "App Development",
      summary: "Custom app development service focused on user-centric design and robust functionality across mobile platforms.",
      description: "Our App Development service delivers fully functional, user-friendly applications for iOS and Android, designed to boost engagement and facilitate customer interaction. Each app is built with a responsive design, optimized for performance, and integrated with secure backends. We cover the entire process from UI/UX design, prototyping, testing, and deployment, ensuring the app aligns with your business goals and user expectations.",
      tags: [Tag.APP_DEVELOPMENT, Tag.UI_UX, Tag.MOBILE_APP, Tag.CROSS_PLATFORM, Tag.PERFORMANCE],
      pictures: ["../../assets/app_development01.png", "../../assets/app_development02.png"]
    },
    {
      id: 5,
      name: "Social Media Management",
      summary: "Professional social media management to increase engagement, reach, and brand loyalty.",
      description: "Our Social Media Management service is designed to establish and maintain a strong presence on platforms such as Facebook, Instagram, Twitter, and LinkedIn. We provide tailored content creation, scheduling, and strategic audience engagement to increase brand reach and user interaction. Our team monitors analytics to optimize content performance and engages directly with followers to foster a loyal customer community.",
      tags: [Tag.SOCIAL_MEDIA, Tag.CONTENT_CREATION, Tag.ENGAGEMENT, Tag.ANALYTICS, Tag.BRAND_MANAGEMENT],
      pictures: ["../../assets/social_media01.png", "../../assets/social_media02.png"]
    },
    {
      id: 6,
      name: "Graphic Design",
      summary: "Professional graphic design services to enhance brand identity and visual appeal.",
      description: "Our Graphic Design service delivers creative solutions for brand identity, including logos, banners, social media graphics, and advertisements. We create designs that capture your brand’s essence and appeal to your target audience. Using tools like Adobe Photoshop, Illustrator, and InDesign, we ensure high-quality and visually captivating designs that meet marketing goals and resonate with customers.",
      tags: [Tag.GRAPHIC_DESIGN, Tag.BRAND_IDENTITY, Tag.ADOBE_CREATIVE_SUITE, Tag.VISUAL_MARKETING],
      pictures: ["../../assets/graphic_design01.png", "../../assets/graphic_design02.png"]
    },
    {
      id: 7,
      name: "Lead Generation",
      summary: "Targeted lead generation service focused on attracting high-quality leads for business growth.",
      description: "Our Lead Generation service uses a combination of email marketing, social media campaigns, and PPC advertising to generate quality leads. We create tailored lead magnets, landing pages, and email sequences to capture interest and drive conversions. Our approach involves analyzing buyer personas, refining audience targeting, and implementing retargeting strategies to convert potential customers into loyal clients.",
      tags: [Tag.LEAD_GENERATION, Tag.EMAIL_MARKETING, Tag.PPC, Tag.CONVERSION_OPTIMIZATION, Tag.SALES_FUNNEL],
      pictures: ["../../assets/lead_generation01.png", "../../assets/lead_generation02.png"]
    },
    {
      id: 8,
      name: "Sales Growth",
      summary: "Sales growth strategies to increase revenue and foster customer loyalty through targeted campaigns.",
      description: "Our Sales Growth service encompasses targeted marketing campaigns, customer segmentation, and personalized outreach to maximize revenue. We analyze market trends and customer data to refine messaging, implement upselling and cross-selling tactics, and enhance brand visibility across channels. By focusing on customer retention and lifetime value, our strategies ensure sustained sales growth for your business.",
      tags: [Tag.SALES_GROWTH, Tag.CUSTOMER_SEGMENTATION, Tag.CROSS_SELLING, Tag.BRAND_VISIBILITY],
      pictures: ["../../assets/sales_growth01.png", "../../assets/sales_growth02.png"]
    }
  ];
  


  constructor(private titleService: Title) {
    this.titleService.setTitle('Digivate | Services')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
