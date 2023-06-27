export interface AppConfig {
    name: string;
    copyrightText: string;
    themeName: string;
    loginUrl?: string;
    logoutUrl?: string;
    profileUrl?: string;
    tNcUrl: string;
    privacyPolicyUrl: string;
    contactUsUrl?: string;
    aboutUsUrl?: string;
    adminEmail?: string;
    defaultPageSize: number;
    metaInfo: any;
    mainMenuItems: Array<any>;
}
