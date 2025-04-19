const inputs = document.querySelectorAll(".CSS-Controller input");

inputs.forEach((inputs) => inputs.addEventListener("change",update));

function update(){
    const Suffixdata = this.dataset.sizing|| "";

    document.documentElement.style.setProperty(
        `--${this.name}`, this.value + Suffixdata
    );
}