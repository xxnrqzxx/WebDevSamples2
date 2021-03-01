class Content extends React.Component {
    

    constructor(props) {
        super(props);

        this.state = {
            page: 1
        };        

        this.pageStyle = this.pageStyle.bind(this);
        this.scrollHandle = this.scrollHandle.bind(this);
        
    }

    componentDidMount() {
        const page = document.querySelectorAll(".page");
        page[0].classList.add("active");

        window.addEventListener("wheel", event =()=>  {
            var a;
            // alert(event.deltaY);
            if(event.deltaY < 0) {
                a = -1;
                this.scrollHandle(a, page);
            } else {
                a = 1;
                this.scrollHandle(a, page);
            }
        });

        this.pageStyle();
        
    }

    componentWillUnmount() {
        this.pageStyle();
    }

    pageStyle() {
        const page = document.querySelectorAll(".page");

        for(let i=0; i<page.length; i++) {
            var elements = document.querySelector("[data-pageno='"+$(page[i]).attr("data-pageno")+"']");
            page[i].style.width = window.innerWidth + "px";
            page[i].style.height = window.innerHeight + "px";
            page[i].style.zIndex = page.length - i;
            console.log(elements.className);
        }
    }

    scrollHandle(a, page) {
        var b = this.state.page + a;
        for(let i = 0; i<page.length; i++) {
            if(b <= 0) {
                b = 1;
            } else if (b >= page.length) {
                b = page.length;
            }
            this.setState(state => ({
                page: b
            }));
            if(page[i].classList.contains("active")) {

                page[i].classList.remove("active");
                page[i].classList.add("hide");

            }

            if($(page[i]).attr("data-pageno") == this.state.page) {

                $(page[i]).removeClass("hide");
                setTimeout(function() {
                    $(page[i]).addClass("active");
                }, 300);
                
            }
        }
        console.log(this.state.page);
        
    }

    render() {
        const page = document.querySelectorAll(".page");

        $(window).resize(this.pageStyle);

        

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