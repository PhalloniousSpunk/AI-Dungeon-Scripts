const modifier = (text) => {

    let modifiedText = text.toLowerCase();
    if (state.generate.process) { parseGen(text); return {text: ''}; }
    text = text.replace(/([\n\r](?!([\n\r])))(?<!(^[\n\r]))/gm, "\n\n");
    text = text.replace(/(^(?<!([^])))(?=($))/gm, "\n");
    text = text.replace(/[\r\n](?![^])/gm, "");
    text = text.replace(/You('re| are)(?=n?\b)(?<!".*)|(You('re| are)(?=n?\b)(?<=(".*){2}))(?<!(".*){3})|(You('re| are)(?=n?\b)(?<=(".*){4}))(?<!(".*){5})/gm, "Stacy is");
    text = text.replace(/you('re| are)(?=n?\b)(?<!".*)|(you('re| are)(?=n?\b)(?<=(".*){2}))(?<!(".*){3})|(you('re| are)(?=n?\b)(?<=(".*){4}))(?<!(".*){5})/gmi, "she is");
    text = text.replace(/You('ve| have)(?=n?\b)(?<!".*)|(You('ve| have)(?=n?\b)(?<=(".*){2}))(?<!(".*){3})|(You('ve| have)(?=n?\b)(?<=(".*){4}))(?<!(".*){5})/gm, "Stacy has");
    text = text.replace(/you('ve| have)(?=n?\b)(?<!".*)|(you('ve| have)(?=n?\b)(?<=(".*){2}))(?<!(".*){3})|(you('ve| have)(?=n?\b)(?<=(".*){4}))(?<!(".*){5})/gmi, "she has");
    text = text.replace(/you do(?=n?\b)(?<!".*)|you do(?=n?\b)(?<=(".*){2})(?<!(".*){3})|you do(?=n?\b)(?<=(".*){4})(?<!(".*){5})/gmi, "Stacy does");
    text = text.replace(/You were(?=n?\b)(?<!".*)|(You were(?=n?\b)(?<=(".*){2}))(?<!(".*){3})|(You were(?=n?\b)(?<=(".*){4}))(?<!(".*){5})/gm, "Stacy was");
    text = text.replace(/you were(?=n?\b)(?<!".*)|(you were(?=n?\b)(?<=(".*){2}))(?<!(".*){3})|(you were(?=n?\b)(?<=(".*){4}))(?<!(".*){5})/gmi, "she was");
    text = text.replace(/Your\b(?<!".*)|(Your\b(?<=(".*){2}))(?<!(".*){3})|(Your\b(?<=(".*){4}))(?<!(".*){5})/gm, "Stacy's");
    text = text.replace(/(\byour|(?<=[a-z]s )you\b)(?<!".*)|(\byour|(?<=[a-z]s )you\b)(?<=(".*){2})(?<!(".*){3})|(\byour|(?<=[a-z]s )you\b)(?<=(".*){4})(?<!(".*){5})/gmi, "her");
    text = text.replace(/(?<=ing |(\b([IOUiou]n)?[Tt]o|\b[Aa]t|\b[Ii]n|\b([Uu]p)?[Oo]n|\b[Oo]ver|\b[Uu]nder|neath|\b[Aa]round|\b[Aa]bove|\b[Bb]elow|side|\b[Aa]s|\b[Ff]rom|\b[Bb]etween|\b[Bb]efore|\b[Aa]fter|\b[Bb]eyond|\b[Bb]ut|\b[Bb]y|\b[Oo]ff?|\b[Pp]ast|\b[Tt]han|\b[Tt]hrough(out)?|\b([Uu]n)?[Ll]ike|\b[Ww]ith(in)?|\b[Nn]ear|\b[Ff]or|\b[Aa]bout|\b[Aa]gainst|\b[Tt]owards?) )you\b(?<!".*)|(?<=ing |(\b([IOUiou]n)?[Tt]o|\b[Aa]t|\b[Ii]n|\b([Uu]p)?[Oo]n|\b[Oo]ver|\b[Uu]nder|neath|\b[Aa]round|\b[Aa]bove|\b[Bb]elow|side|\b[Aa]s|\b[Ff]rom|\b[Bb]etween|\b[Bb]efore|\b[Aa]fter|\b[Bb]eyond|\b[Bb]ut|\b[Bb]y|\b[Oo]ff?|\b[Pp]ast|\b[Tt]han|\b[Tt]hrough(out)?|\b([Uu]n)?[Ll]ike|\b[Ww]ith(in)?|\b[Nn]ear|\b[Ff]or|\b[Aa]bout|\b[Aa]gainst|\b[Tt]owards?) )you\b(?<=(".*){2})(?<!(".*){3})|(?<=ing |(\b([IOUiou]n)?[Tt]o|\b[Aa]t|\b[Ii]n|\b([Uu]p)?[Oo]n|\b[Oo]ver|\b[Uu]nder|neath|\b[Aa]round|\b[Aa]bove|\b[Bb]elow|side|\b[Aa]s|\b[Ff]rom|\b[Bb]etween|\b[Bb]efore|\b[Aa]fter|\b[Bb]eyond|\b[Bb]ut|\b[Bb]y|\b[Oo]ff?|\b[Pp]ast|\b[Tt]han|\b[Tt]hrough(out)?|\b([Uu]n)?[Ll]ike|\b[Ww]ith(in)?|\b[Nn]ear|\b[Ff]or|\b[Aa]bout|\b[Aa]gainst|\b[Tt]owards?) )you\b(?<=(".*){4})(?<!(".*){5})/gm, "Stacy");
    text = text.replace(/You\b(?<!".*)|You\b(?<=(".*){2})(?<!(".*){3})|You\b(?<=(".*){4})(?<!(".*){5})/gm, "She");
    text = text.replace(/you\b(?<!".*)|you\b(?<=(".*){2})(?<!(".*){3})|you\b(?<=(".*){4})(?<!(".*){5})/gmi, "her");
    return { text }
}

modifier(text)
