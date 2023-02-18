declare module "*.svg" {
    import React = require("react");
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}
declare module "*.css" {
    const content: Record<string, string>;
    export default content;
}
declare module "*.png"
declare module "*.jpg"