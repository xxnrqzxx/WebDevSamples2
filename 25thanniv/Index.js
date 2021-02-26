class Content extends React.Component {
    

    constructor(props) {
        super(props);

        this.pageStyle = this.pageStyle.bind(this);
        
    }

    componentDidMount() {
        const page = document.querySelectorAll(".page");
        
        window.addEventListener("wheel", function(event) {
            if(event.deltaY < 0 ) {
                alert("scrolled up");
            } else {
                alert("scrolled down");
            }
        });

        this.pageStyle(page);
    }

    componentWillUnmount() {
        this.pageStyle();
    }

    pageStyle(page) {

        for(let i=0; i<page.length; i++) {
            var elements = document.querySelectorAll("[data-pageno]");
            page[i].style.width = window.innerWidth + "px";
            page[i].style.height = window.innerHeight + "px";
            page[i].style.zIndex = page.length - i;
            if(elements[i] === $(page[i]).attr("data-pageno")) {
                alert("test");
            }
        }
    }

    render() {
        const page = document.querySelectorAll(".page");
        
        window.addEventListener("resize", this.pageStyle(page));

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