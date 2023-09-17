interface TextProps {
    text: string;
    textColor: string;
    textWeight?: string;
}


export function EmphasizedText(textProps : TextProps) {
    const {text, textColor, textWeight} = textProps
    return <span style={{ fontWeight: textWeight, color: textColor }}>{text}</span>
}