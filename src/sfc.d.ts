declare module '*.vue' {
    import Vue, { PluginFunction } from 'vue';
    export default Vue;
}
declare module 'uview-ui' {
    const plugin: PluginFunction<any>;
    export default plugin;
}
