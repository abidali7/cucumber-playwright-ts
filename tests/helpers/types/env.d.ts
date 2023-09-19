export {}

declare global {
    namespace NodeJS {
        interface processEnv {
            BROWSER : "chrome" | "firefox" | "webkit",
            ENV : "stag" | "prod" | "qa" | "feat",
            BASEURL : string,
            HEADLESS: true | false
        }
    }
}