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
            var a, b;
            page.forEach(element => {
                if(element.classList.contains("active")) {
                    if(event.deltaY < 0) {
                        a = ($(element).attr("data-pageno"))-1;
                        if(a <= 0) {
                            a = 1;
                        }
                        b = $("[data-pageno='"+a+"']");
                        this.scrollHandle(element, b);
                    } else {
                        a = Number(($(element).attr("data-pageno")))+1;
                        if(a >= page.length) {
                            a = page.length;
                        }
                        b = $("[data-pageno='"+a+"']");
                        this.scrollHandle(element, b);
                    }
                }
            });

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

    scrollHandle(e, b) {
        e.classList.remove("active");
        e.classList.add("hide");

        $(b).removeClass("hide");

        setTimeout(function(){
            $(b).addClass("active");
        }, 300);
        
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