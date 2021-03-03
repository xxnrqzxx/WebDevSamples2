class Content extends React.Component {
    

    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            pages: 0
        };        

        this.pageStyle = this.pageStyle.bind(this);
        this.scrollHandle = this.scrollHandle.bind(this);
        
    }

    componentDidMount() {
        const page = document.querySelectorAll(".page");


        page[0].classList.add("active");

        $(document).ready(()=> {
            this.setState(state => ({
                pages: page.length
            }));
        });



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
            page[i].style.transition = "none";
            page[i].style.width = window.innerWidth + "px";
            page[i].style.height = window.innerHeight + "px";
            page[i].style.zIndex = page.length - i;
  
            setTimeout(function(){
                page[i].style.transition = "all 1s ease";
            }, 300);
        }
    }

    scrollHandle(e, b) {
        e.classList.remove("active");
        e.classList.add("hide");

        $(b).removeClass("hide");

        this.setState(state => ({
            page: Number($(b).attr("data-pageno"))
        }));

        // alert(this.state.page);

        setTimeout(function(){
            $(b).addClass("active");
        }, 300);
        
    }

    render() {

        var page = this.state.page;
        var pages = this.state.pages;

        // alert(page);
    
        $(window).resize(this.pageStyle);

        

        return(
            <div>
                <div className="contents">
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
                <Navigation page = {page} pages = {pages} />
            </div>
        );
    }
}

class Navigation extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {

        const pageEl = document.querySelectorAll(".page");
        
        var u = setTimeout(function() {
            $(".indicator").removeClass("show");
            }, 3000);

        var indicator = document.querySelector(".indicator");

        $(document).ready(function() {

            
            for(let i=0; i<pageEl.length; i++) {
                indicator.innerHTML += "<div class='dot "+[i+1]+"'></div>";
                if(pageEl[i].classList.contains("active")){
                    $("."+$(pageEl[i]).attr("data-pageno")).addClass("active");
                }
            }

            $(".sidenav").hover(sideNav);

            $(".indicator").hover(function() {
                $(".dot").addClass("hover");
                sideNav();
            }, function() {
                $(".dot").removeClass("hover");
            });

            $(".dot").hover(function() {
                sideNav();
            });

           $(document).click(function(event) {
                const element = event.target;

                const dotEl = document.querySelectorAll(".dot");


                if(element.classList.contains("dot") && !element.classList.contains("active")) {
                    
                    pageEl.forEach(function(el) {
                        el.classList.add("hide");

                        dotEl.forEach(function(dEl) {
                            dEl.classList.remove("active");
                        });
                        if(element.classList.contains($(el).attr("data-pageno"))) {
                            el.classList.remove("hide");
                            

                            setTimeout(function() {
                                el.classList.add("active");
                                element.classList.add("active");
                            }, 300);
                        }
                    });
                }
           });


        });


        function sideNav() {
            
            $(".indicator").addClass("show");
    
            clearTimeout(u);
    
            u = setTimeout(function() {
                $(".indicator").removeClass("show");
                }, 3000);
        }
    }

    componentDidUpdate(prevProps) {
        const pages = document.querySelectorAll(".page");
        const dot = document.querySelectorAll(".dot");

        var u = setTimeout(function() {
            $(".indicator").removeClass("show");
            }, 3000);

        var a = this.props.page;
        if(this.props.page !== prevProps.page) {
            dot.forEach(function(dotEl) {
                dotEl.classList.remove("active");
                if(dotEl.classList.contains(a)) {
                    setTimeout(function() {
                        dotEl.classList.add("active");
                    }, 300);
                }
            });
            sideNav();
        }

        function sideNav() {
            
            $(".indicator").addClass("show");
    
            clearTimeout(u);
    
            u = setTimeout(function() {
                $(".indicator").removeClass("show");
                }, 3000);
        }
    }


    render() {


        var page = this.props.page;
        const pages = this.props.pages;

        return(
            <div>
                <div className="sidenav">
                    <div className="indicator"></div>
                </div>
            </div>
        );
    }
}

class PageNo extends React.Component {

    render() {
        const page = this.props.page;
        const pages = this.props.pages;
        return(
            <div>
                <div className="pageno">{page} / {pages}</div>
            </div>
        );
    }
}

ReactDOM.render(<Content />, document.querySelector('#content'));