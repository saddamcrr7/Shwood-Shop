$(document).ready(function(){
    // HOVER TO ROTATE GLASS
    $(".item-1").mouseenter(function(){
        $(".item-1 img").css("display", "block");
        $(".item-2 img, .item-3 img, .item-4 img, .item-5 img, .item-6 img, .item-7 img" ).css("display", "none");      
    }); 
    $(".item-2").mouseenter(function(){
        $(".item-2 img").css("display", "block");
        $(".item-1 img, .item-3 img, .item-4 img, .item-5 img, .item-6 img, .item-7 img" ).css("display", "none");
    });
    $(".item-3").mouseenter(function(){
        $(".item-3 img").css("display", "block");
        $(".item-1 img, .item-2 img, .item-4 img, .item-5 img, .item-6 img, .item-7 img" ).css("display", "none");
    });
    $(".item-4").mouseenter(function(){
        $(".item-4 img").css("display", "block");
        $(".item-1 img, .item-2 img, .item-3 img, .item-5 img, .item-6 img, .item-7 img" ).css("display", "none");        
    });
    $(".item-5").mouseenter(function(){
        $(".item-5 img").css("display", "block");
        $(".item-1 img, .item-2 img, .item-3 img, .item-4 img, .item-6 img, .item-7 img" ).css("display", "none");        
    });
    $(".item-6").mouseenter(function(){
        $(".item-6 img").css("display", "block");
        $(".item-1 img, .item-2 img, .item-3 img, .item-4 img, .item-5 img,  .item-7 img" ).css("display", "none"); 
    });
    $(".item-7").mouseenter(function(){
        $(".item-7 img").css("display", "block");
        $(".item-1 img, .item-2 img, .item-3 img, .item-4 img, .item-5 img, .item-6 img").css("display", "none");
    });
    // HOVER TO ROTATE END

    //CLICK TO CHANGE IMAGE, PRICE AND NAME
    $(function() {
        $(".product-1").click(function(){
          $(".item-1 img").attr("src","img/product/Walnut/WOCWGP1_1050x.progressive.jpg");
          $(".item-2 img").attr("src","img/product/Walnut/WOCWG2_d7e705ad-a0e5-4af9-9fea-14460845ab4c_1050x.progressive.jpg");
          $(".item-3 img").attr("src","img/product/Walnut/WOCWG3_839ab5fd-7a66-4f4b-984b-84e2cb629016_1050x.progressive.jpg");
          $(".item-4 img").attr("src","img/product/Walnut/WOCWG4_4f2a562d-e492-4164-af17-71c7087f9570_1050x.progressive.jpg");
          $(".item-5 img").attr("src","img/product/Walnut/WOCWG5_d0752615-a667-48be-bb71-82caeb009734_1050x.progressive.jpg");
          $(".item-6 img").attr("src","img/product/Walnut/WOCWG5_d0752615-a667-48be-bb71-82caeb009734_1050x.progressive.jpg");
          $(".item-7 img").attr("src","img/product/Walnut/WOCWG7_99fb2c3d-6d14-4564-a998-a808eed51d9e_1050x.progressive.jpg");
          $(".price").text("$ 159.00");
          $(".name").text("WALNUT / GREY");
          $(".product-1 p").css("color" , "#ccab4f");
          $(".product-2 p, .product-3 p, .product-4 p").css("color" , "#000");
          return false;
        });
        $(".product-2").click(function(){
            $(".item-1 img").attr("src","img/product/DistressedDarkWalnut/WOCDDWG1_dcd45b29-ae4b-4adc-8fb6-ac479919e7db_1050x.progressive.jpg");
            $(".item-2 img").attr("src","img/product/DistressedDarkWalnut/WOCDDWG2_8251f87a-2e2f-4390-a2c0-4e729c060213_1050x.progressive.jpg");
            $(".item-3 img").attr("src","img/product/DistressedDarkWalnut/WOCDDWG3_d2728cf0-a690-43c9-af47-1d718788d738_1050x.progressive.jpg");
            $(".item-4 img").attr("src","img/product/DistressedDarkWalnut/WOCDDWG4_ab1113ad-9d22-4413-9753-fdb4aa78369f_1050x.progressive.jpg");
            $(".item-5 img").attr("src","img/product/DistressedDarkWalnut/WOCDDWG5_e6cd630c-904f-41a9-8efc-4723bbc237a7_1050x.progressive.jpg");
            $(".item-6 img").attr("src","img/product/DistressedDarkWalnut/WOCDDWG6_c1c4769b-1419-41bf-ae47-435485e3d81b_1050x.progressive.jpg");
            $(".item-7 img").attr("src","img/product/DistressedDarkWalnut/WOCDDWG7_e0c2832d-449e-478a-bda8-8f59b779671a_1050x.progressive.jpg");
            $(".price").text("$ 159.00");
            $(".name").text("DISTRESSED DARK WALNUT / GREY");
            $(".product-2 p").css("color" , "#ccab4f");
            $(".product-1 p, .product-3 p, .product-4 p").css("color" , "#000");
            return false;
        });
        $(".product-3").click(function(){
            $(".item-1 img").attr("src","img/product/Zebrawood/WOCZGP1_dabea0cd-8de2-43fd-ad31-2a0bbcb1ce9a_1050x.progressive.jpg");
            $(".item-2 img").attr("src","img/product/Zebrawood/WOCZGP2_8a2f79f1-ce9a-4422-b461-f57e02fd1da8_1050x.progressive.jpg");
            $(".item-3 img").attr("src","img/product/Zebrawood/WOCZGP3_6c561ef5-8696-4a99-9f03-dc2c25293633_1050x.progressive.jpg");
            $(".item-4 img").attr("src","img/product/Zebrawood/WOCZGP4_9ccb6375-0dca-49e0-8f68-5d502427a8ee_1050x.progressive.jpg");
            $(".item-5 img").attr("src","img/product/Zebrawood/WOCZGP5_dd9dfda6-9cf7-4ef8-a866-4c52092b945d_1050x.progressive.jpg");
            $(".item-6 img").attr("src","img/product/Zebrawood/WOCZGP6_c481cfff-96e5-4d6c-b498-7c1a0521c3bb_1050x.progressive.jpg");
            $(".item-7 img").attr("src","img/product/Zebrawood/WOCZGP7_e47cab97-28cb-4fb7-864b-3f509d282680_1050x.progressive.jpg");
            $(".price").text("$ 149.00");
             $(".name").text("ZEBRAWOOD / GREY");
             $(".product-3 p").css("color" , "#ccab4f");
             $(".product-1 p, .product-2 p, .product-4 p").css("color" , "#000");
            return false;
        });
        $(".product-4").click(function(){
            $(".item-1 img").attr("src","img/product/DarkWalnut/WOCDWG1_2061d7ff-fc88-4656-86d8-351597efedd6_1050x.progressive.jpg");
            $(".item-2 img").attr("src","img/product/DarkWalnut/WOCDWG2_dad14698-3ae8-46cc-b8d2-93f7addf73bc_1050x.progressive.jpg");
            $(".item-3 img").attr("src","img/product/DarkWalnut/WOCDWG3_db27137d-31aa-42ad-9e85-7181e32d774d_1050x.progressive.jpg");
            $(".item-4 img").attr("src","img/product/DarkWalnut/WOCDWG4_92e4db2c-4da5-485e-9505-c874114ae04e_1050x.progressive.jpg");
            $(".item-5 img").attr("src","img/product/DarkWalnut/WOCDWG5_ea9b62a2-e69e-4bca-abf0-787324a974cd_1050x.progressive.jpg");
            $(".item-6 img").attr("src","img/product/DarkWalnut/WOCDWG6_39c09866-17ba-431b-a002-23eab64d44be_1050x.progressive.jpg");
            $(".item-7 img").attr("src","img/product/DarkWalnut/WOCDWG7_1870d59c-4c1e-4a3a-9e78-7aad20a29ecf_1050x.progressive.jpg");
            $(".price").text("$ 159.00");
            $(".name").text("Dark WALNUT / GREY");
            $(".product-4 p").css("color" , "#ccab4f");
            $(".product-1 p, .product-2 p, .product-3 p").css("color" , "#000");
            return false;
        });
        var lensName = " polarized";
        var price = 40;
        $(".grey-polarized").one("click",function(){
            $(".name").append(lensName);   
        });
        //add lans price
        $(".grey-polarized").click(function(){
            $(".grey-polarized img").addClass("lens-border");
            $(".grey img").removeClass("lens-border");
            $(".price").text("$ 199.00");
        });
        $(".grey").click(function(){
            $(".name").remove(lensName);
            $(".grey img").addClass("lens-border");
            $(".grey-polarized img").removeClass("lens-border");
            $(".price").text("$ 159.00");
          });
        //full-screen slide display none and blovk
        $(".model .expand").click(function(){
            $(".full-screen-slider").css("display", "block");
        });
        $(".close-slider").click(function(){
            $(".full-screen-slider").css("display", "none");
        });
        // tooltips show and hide
        $(".circle-1,.tooltips1 .plus, .tooltips1 .minus").click(function() {
            var $this = $(this);
            var display = !$this.data("display");
            $this.data("display", display);
            $(".tooltip-text-1").css({"display": display ? "block" : ""});
            $(".tooltip-text-2, .tooltip-text-3, .tooltip-text-4").css("display", "none");
            $(".tooltips1 .plus").css( {"transform": display ? "rotate(90deg)" : ""});
            $(".tooltips2 .plus, .tooltips3 .plus, .tooltips4 .plus").css( {"transform":"rotate(0deg)"});            
          });
        $(".circle-2,.tooltips2 .plus, .tooltips2 .minus").click(function() {
            var $this = $(this);
            var display = !$this.data("display");
            $this.data("display", display);
            $(".tooltip-text-2").css({"display": display ? "block" : ""});
            $(".tooltip-text-1, .tooltip-text-3, .tooltip-text-4").css("display", "none");
            $(".tooltips2 .plus").css( {"transform": display ? "rotate(90deg)" : ""});
            $(".tooltips1 .plus, .tooltips3 .plus, .tooltips4 .plus").css( {"transform":"rotate(0deg)"});            
            
          });
        $(".circle-3,.tooltips3 .plus, .tooltips3 .minus").click(function() {
            var $this = $(this);
            var display = !$this.data("display");
            $this.data("display", display);
            $(".tooltip-text-3").css({"display": display ? "block" : ""});
            $(".tooltip-text-1, .tooltip-text-2, .tooltip-text-4").css("display", "none");
            $(".tooltips3 .plus").css( {"transform": display ? "rotate(90deg)" : ""});
            $(".tooltips1 .plus, .tooltips2 .plus, .tooltips4 .plus").css( {"transform":"rotate(0deg)"});            
            
          });
        $(".circle-4,.tooltips4 .plus, .tooltips4 .minus").click(function() {
            var $this = $(this);
            var display = !$this.data("display");
            $this.data("display", display);
            $(".tooltip-text-4").css({"display": display ? "block" : ""});
            $(".tooltip-text-1, .tooltip-text-2, .tooltip-text-3").css("display", "none");
            $(".tooltips4 .plus").css( {"transform": display ? "rotate(90deg)" : ""});
            $(".tooltips1 .plus, .tooltips2 .plus, .tooltips3 .plus").css( {"transform":"rotate(0deg)"});                        
          });
    });

    //for scroll to count
    var a = 0;
    $(window).scroll(function() {
    var oTop = $(".count").offset().top - window.innerHeight;
    if (a === 0 && $(window).scrollTop() > oTop) {
        $(".count").each(function () {
            $(this).prop("Counter",0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        $(".process-video video").trigger("play");
        a = 1;
    }
    });

    //scroll to fade-in bottom
    window.sr = ScrollReveal();
      sr.reveal(".product-about, #mini-slider, #process, #material",{
        duration: 1500,
        origin: "bottom"
      });

      //Add smooth scrolling to all links
      $(".material-text a").on("click", function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $("html, body").animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
            window.location.hash = hash;
          });
        }
      });
});