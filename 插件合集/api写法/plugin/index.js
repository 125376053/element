const plugin = {
    install (vue, options = {}) {
        vue.mixin({
            computed: {
                $tid () {
                    return 123
                },
            }
        })
    }
}

export default plugin
export const install = plugin.install
