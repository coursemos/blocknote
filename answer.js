function answer(props) {
    const { react, blockSpec, textOption, slashMenu, jsx } = props;
    const { createSVGComponent } = createSVG(react)

    const answerIcon = (e) => {
        return createSVGComponent({
            tag: "svg",
            attr: {
                viewBox: "0 0 24 24",
                fill: "currentColor"
            },
            child: [{
                tag: "path",
                attr: {
                    d: "M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"
                },
                child: []
            }]
        })(e)
    }

    const answerBlock = e => {
        return (0, jsx)("div", {
            className: "answerWrapper",
            children: (0, jsx)("div", {
                className: "answerWrapper-inner",
                children: [(0, jsx)("div", {
                    className: "answer_container",
                    children: [
                        (0, jsx)("span", { children: "A : " }),
                        (0, jsx)("div", {
                            ref: e.contentRef,
                            className: "inline-content",
                            placeholder: "Enter a answer",
                        })
                    ]
                }),
                ]
            })
        })
    }

    const answerSpec = blockSpec({
        type: "answer",
        propSchema: {
            textColor: textOption.textColor,
        },
        content: "inline"
    }, {
        render: e => (0, jsx)(answerBlock, {
            ...e
        })
    })

    const answerItem = e => ({
        title: "answer",
        subtext: "answer",
        onItemClick: () => {
            slashMenu(e, {
                type: "answer",
            })
        },
        aliases: ["answer", "q&a", "qna"],
        group: "Q&A",
        icon: (0, jsx)(answerIcon, {}),
    });

    return { answerSpec, answerItem };
}