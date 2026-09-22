function hello() {
    let name = document.getElementById("hello").value;
    let a = documment.getElementById("soa").value;
    let b = documment.getElementById("sob").value;

    // alert("Xin chào, " + name + "!");
    document.getElementById("message").innerHTML = "Xin chào " + name + "!";
}
// hello();