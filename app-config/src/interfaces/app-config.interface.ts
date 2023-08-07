export interface AppConfig {
    name: string;
    copyrightText: string;
    themeName: string;
    adminEmail?: string;
    siteEmail?: string;
    defaultPageSize: number;
    metaInfo: any;
    mainMenuItems: Array<any>;

    // Urls
    apiBaseUrl: string;
    imagesSourceUrl: string;
    loginUrl?: string;
    logoutUrl?: string;
    profileUrl?: string;
    tNcUrl: string;
    privacyPolicyUrl: string;
    contactUsUrl?: string;
    aboutUsUrl?: string;

    //Firebase
    firebase?: any;

    // Openai
    openai?: any;

    // Openai
    socialMedia?: any;

    // Any custom key value
    [key: string]: any,
}
