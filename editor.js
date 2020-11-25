const editor = new EditorJS({
    holder: 'editorjs',
    /** 
     * Available Tools list. 
     * Pass Tool's class or Settings object for each Tool you want to use 
     */
    tools:{
        header:Header,
        //heading: Header, 
        delimiter: Delimiter,
        paragraph: {
            class: Paragraph,
            inlineToolbar: true,
        },
        embed: Embed,
        /*embed: {
            class: Embed,
            config: {
                services: {
                    youtube: true,
                    coub: true
                }
            }
        },*/
        image: SimpleImage,
        list: List,

        checklist: Checklist,
        quote: Quote,
        warning: Warning,
        marker: Marker,
    }
}
);