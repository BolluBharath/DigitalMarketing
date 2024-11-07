
export class Tag {
    static readonly ANGULAR = new Tag('Angular', '#5a7581');
    static readonly JAVA = new Tag('Java', '#5a7581');
    static readonly SPRINGBOOT = new Tag('Spring Boot', '#5a7581');
    static readonly SPRINGSECURITY = new Tag('Spring Security', '#5a7581');
    static readonly SPRINGJWT = new Tag('Spring JWT', '#5a7581');
    static readonly SPRINGWEB = new Tag('Spring Web', '#5a7581');
    static readonly LOMBOK = new Tag('Lombok', '#5a7581');
    static readonly JPA = new Tag('JPA', '#5a7581');
    static readonly JDBC = new Tag('JDBC', '#5a7581');
    static readonly POSTGRESQL = new Tag('PostgreSQL', '#355158')
    static readonly SQL = new Tag('SQL', '#355158');
    static readonly SQLALCHEMY = new Tag('SQLAlchemy', '#4a6a77');
    static readonly PYTHON = new Tag('Python', '#4a6a77');
    static readonly FLASK = new Tag('Flask', '#4a6a77');
    static readonly BEAUTIFULSOUP = new Tag('Beautiful Soup', '#4a6a77');
    static readonly PLAYWWRIGHT = new Tag('Playwright', '#4a6a77');
    static readonly SELENIUM = new Tag('Selenium Driver', '#4a6a77');
    static readonly PANDAS = new Tag('Pandas', '#4a6a77');
    static readonly DASH = new Tag('Dash', '#4a6a77');
    static readonly PLOTLY = new Tag('Plotly', '#4a6a77');
    static readonly RESTAPI = new Tag('Rest API', '#355158');
    static readonly INSOMNIA = new Tag('Insomnia', '#355158');
    static readonly POSTMAN = new Tag('Postman', '#355158');
    static readonly TYPESCRIPT = new Tag('Typescript', '#192129');
    static readonly JAVASCRIPT = new Tag('Javascript', '#192129');
    static readonly HTML5 = new Tag('HTML5', '#192129');
    static readonly CSS3 = new Tag('CSS3', '#192129');
    static readonly BOOTSTRAP = new Tag('Bootstrap', '#192129');
    static readonly PYTEST = new Tag('Pytest', '#4a6a77');
    static readonly JUNIT = new Tag('JUnit', '#5a7581');
    static readonly MOCKITO = new Tag('Mockito', '#5a7581');
    static readonly DOCKER = new Tag('Docker', '#355158');
    static readonly DOCKERCOMPOSE = new Tag('Docker Compose', '#355158');
    static readonly VUEJS = new Tag('Vue.JS', '#192129');
    static readonly HIBERNATE = new Tag('Hibernate', '#5a7581');
    static readonly FASTAPI = new Tag('FastAPI', '#4a6a77');
    static readonly SQLITE = new Tag('SQLite', '#355158');
    static readonly PYDANTIC = new Tag('Pydantic', '##4a6a77');

    static readonly DIGITAL_MARKETING = new Tag('Digital Marketing', '#3b5998');
    static readonly ANALYTICS = new Tag('Analytics', '#f39c12');
    static readonly STRATEGY = new Tag('Strategy', '#1abc9c');
    static readonly SEO = new Tag('SEO', '#3498db');
    static readonly CONTENT_CREATION = new Tag('Content Creation', '#9b59b6');
    static readonly KEYWORD_RESEARCH = new Tag('Keyword Research', '#e67e22');
    static readonly CONTENT_STRATEGY = new Tag('Content Strategy', '#e74c3c');
    static readonly BACKLINKS = new Tag('Backlinks', '#8e44ad');
    static readonly LOCAL_SEO = new Tag('Local SEO', '#27ae60');
    static readonly WEBSITE_DESIGN = new Tag('Website Design', '#2980b9');
    static readonly UX_UI = new Tag('UX/UI', '#16a085');
    static readonly WEB_DEVELOPMENT = new Tag('Web Development', '#7f8c8d');
    static readonly RESPONSIVE_DESIGN = new Tag('Responsive Design', '#f1c40f');
    static readonly CONVERSION_OPTIMIZATION = new Tag('Conversion Optimization', '#e74c3c');
    static readonly APP_DEVELOPMENT = new Tag('App Development', '#2980b9');
    static readonly UI_UX = new Tag('UI/UX', '#1abc9c');
    static readonly MOBILE_APP = new Tag('Mobile App', '#8e44ad');
    static readonly CROSS_PLATFORM = new Tag('Cross Platform', '#34495e');
    static readonly PERFORMANCE = new Tag('Performance', '#27ae60');
    static readonly SOCIAL_MEDIA = new Tag('Social Media', '#3b5998');
    static readonly ENGAGEMENT = new Tag('Engagement', '#9b59b6');
    static readonly BRAND_MANAGEMENT = new Tag('Brand Management', '#3498db');
    static readonly GRAPHIC_DESIGN = new Tag('Graphic Design', '#e67e22');
    static readonly BRAND_IDENTITY = new Tag('Brand Identity', '#8e44ad');
    static readonly ADOBE_CREATIVE_SUITE = new Tag('Adobe Creative Suite', '#d35400');
    static readonly VISUAL_MARKETING = new Tag('Visual Marketing', '#c0392b');
    static readonly LEAD_GENERATION = new Tag('Lead Generation', '#2ecc71');
    static readonly EMAIL_MARKETING = new Tag('Email Marketing', '#3498db');
    static readonly PPC = new Tag('PPC', '#9b59b6');
    static readonly SALES_FUNNEL = new Tag('Sales Funnel', '#e74c3c');
    static readonly SALES_GROWTH = new Tag('Sales Growth', '#4b77a7');
    static readonly CUSTOMER_SEGMENTATION = new Tag('Customer Segmentation', '#4b77a7');
    static readonly CROSS_SELLING = new Tag('Cross Selling', '#4b77a7');
    static readonly BRAND_VISIBILITY = new Tag('Brand Visibility', '#4b77a7');






    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}