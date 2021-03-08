const modifier = (text) => {

    let modifiedText = text.toLowerCase();
    text = text.replace(/you('re| are)(?=n?\b)(?<!".*)|(you('re| are)(?=n?\b)(?<=(".*){2}))(?<!(".*){3})|(you('re| are)(?=n?\b)(?<=(".*){4}))(?<!(".*){5})/gmi, info.characters.[0].name + " is");
    text = text.replace(/you('ve| have)(?=n?\b)(?<!".*)|(you('ve| have)(?=n?\b)(?<=(".*){2}))(?<!(".*){3})|(you('ve| have)(?=n?\b)(?<=(".*){4}))(?<!(".*){5})/gmi, info.characters.[0].name + " has");
    text = text.replace(/you do(?=n?\b)(?<!".*)|you do(?=n?\b)(?<=(".*){2})(?<!(".*){3})|you do(?=n?\b)(?<=(".*){4})(?<!(".*){5})/gmi, info.characters.[0].name + " does");
    text = text.replace(/you were(?=n?\b)(?<!".*)|(you were(?=n?\b)(?<=(".*){2}))(?<!(".*){3})|(you were(?=n?\b)(?<=(".*){4}))(?<!(".*){5})/gmi, info.characters.[0].name + " was");
    text = text.replace(/yours?\b(?<!".*)|(yours?\b(?<=(".*){2}))(?<!(".*){3})|(yours?\b(?<=(".*){4}))(?<!(".*){5})/gmi, info.characters.[0].name + "'s");
    text = text.replace(/you(rself)?\b(?<!".*)|you(rself)?\b(?<=(".*){2})(?<!(".*){3})|you(rself)?\b(?<=(".*){4})(?<!(".*){5})/gmi, info.characters.[0].name);
    return { text }
}

modifier(text)
