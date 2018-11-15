$(document).ready(function(){
    $("#firstNameMandatory").hide();
    $("#lastNameMandatory").hide();
    $("#emailMandatory").hide();
    $("#otherMediaChannel").hide();
    $("#submit").hide();
    

    let firstNameSet: Boolean = false;
    let lastNameSet: Boolean = false;
    let emailSet: Boolean = false;

    $("#firstName").change(function(){
        if($("#firstName").val() !== ""){
            $("#firstNameMandatory").hide();
            firstNameSet = true;
        }else{
            $("#firstNameMandatory").show();
            firstNameSet = false;
        }
        check();
    });
    $("#lastName").change(function(){
        if($("#lastName").val() !== ""){
            $("#lastNameMandatory").hide();
            lastNameSet = true;
        }else{
            $("#lastNameMandatory").show();
            lastNameSet = false;
        }
        check();
    });
    $("#email").change(function(){
        if($("#email").val() === "" && $("#newsletter").is(":checked")){
            $("#emailMandatory").show();
            emailSet = false;
        }else{
            $("#emailMandatory").hide();
            emailSet = true;
        }
        check();
    });
    $("#newsletter").change(function(){
        if($("#email").val() === "" && $("#newsletter").is(":checked")){
            $("#emailMandatory").show();
            emailSet = false;
        }else{
            $("#emailMandatory").hide();
            emailSet = true;
        }
        check();
    });
    $("#mediaChannelSelect").change(function(){
        if($("#mediaChannelSelect").val() !== "Other"){
            $("#otherMediaChannel").hide();
        }else{
            $("#otherMediaChannel").show();
        }
    });

    function check(){
        if(firstNameSet && lastNameSet && emailSet){
            $("#submit").show();
        }else{
            $("#submit").hide();
        }
    }
});