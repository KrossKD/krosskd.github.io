
// This script that emulates an action of writting on a CLI.

var i = 0;
var command_text = "ls -l";
var result_text = "drwxr-xr-x 2 krosskd krosskd 4096 Sep 6 16:26 coming_soon";
var char_input_delay = 200; //in ms

function write_cli_command() {
    if (i >= command_text.length) {
        print_cli_result();
        return;
    }
    var cli_input = get_input_element("cli_input");
    cli_input.innerHTML += command_text[i];
    i++;
    setTimeout(write_cli_command, char_input_delay);
}

function get_input_element(id) {
    return document.getElementById(id);
}

function print_cli_result() {
    var cli_result = get_input_element("cli_result");
    cli_result.innerText = result_text;
}

function main() {
    write_cli_command();
}
main();