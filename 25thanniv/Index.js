class Content extends React.Component {
    

    constructor(props) {
        super(props);

        this.pageStyle = this.pageStyle.bind(this);
        
    }

    componentDidMount() {
        const page = document.querySelectorAll(".page");
        
        this.pageStyle(page);
    }

    componentWillUnmount() {
        this.pageStyle();
    }

    pageStyle(page) {
        for(let i=0; i<page.length; i++) {
            page[i].style.width = window.innerWidth + "px";
            page[i].style.height = window.innerHeight + "px";
            page[i].style.zIndex = page.length - i;
        }
    }

    render() {
        
        $(window).resize(this.resizeElement);

        return(
            <div>
                <div className="first page" data-up=".first" data-down=".second" data-pageno="1">
                    <h1>First</h1>
                </div>
                <div className="second page" data-up=".first" data-down=".third" data-pageno="2">
                    <h1>Second</h1>
                </div>
                <div className="third page" data-up=".second" data-down=".third" data-pageno="3">
                    <h1>Third</h1>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Content />, document.querySelector('#content'));