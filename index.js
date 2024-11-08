const editor = () => {
    const { createRoot,
        react,
        blockSpec,
        textOption,
        slashMenu,
        jsx,
        blcokSpecCreate,
        defaultSpec,
        schemaConfig,
        blocknoteMain,
        slashMenuChild,
        slashMenuSetting,
        defaultMenuItem
    } = blocknote();

    const { questionSpec, questionItem } = question({ react, blockSpec, textOption, slashMenu, jsx })
    const { answerSpec, answerItem } = answer({ react, blockSpec, textOption, slashMenu, jsx })

    const schema = blcokSpecCreate({
        blockSpecs: {
            ...defaultSpec,
            question: questionSpec,
            answer: answerSpec
        }
    })

    let blocknoteEditor = ''

    function blocknoteContent() {
        const editor = schemaConfig({ schema });
        return (0, jsx)("div", {
            children: (0, jsx)(blocknoteMain, {
                editor: editor,
                slashMenu: !1,
                onChange: () => {
                    blocknoteEditor = editor;
                },
                children: (0, jsx)(slashMenuChild, {
                    triggerCharacter: "/",
                    getItems: async t => slashMenuSetting([
                        ...defaultMenuItem(editor),
                        questionItem(editor),
                        answerItem(editor)
                    ], t)
                })
            })
        })
    }

    function blockNoteRendering(element) {
        createRoot(document.getElementById(element)).render((0, jsx)(react.StrictMode, {
            children: (0, jsx)(blocknoteContent, {}),
        }))

        const exportEditor = () => {
            console.log(JSON.stringify(blocknoteEditor.document, null, 2))
        }

        const importEditor = (json) => {
            blocknoteEditor.insertBlocks(json, blocknoteEditor.document[0])
        }

        return { exportEditor, importEditor }
    }

    return {
        blockNoteRendering,
    }
}
