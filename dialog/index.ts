export async function handleIncomingMessage(incomingMessage: any): Promise<any> {
    // const userId = incomingMessage.session.user_id;

    //metacommand
    const message = incomingMessage as any;

    // if (!message.meta) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету meta'
    //     });
    // }
    //
    // if (!message.meta.locale) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету locale'
    //     });
    // }
    //
    // if (!message.meta.timezone) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету timezone'
    //     });
    // }
    //
    // if (!message.meta.client_id) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету client_id'
    //     });
    // }
    //
    // if (!message.meta.interfaces) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету intefaces'
    //     });
    // }
    // if (!message.meta.interfaces) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету intefaces.screen'
    //     });
    // }
    //
    // if (!message.meta.interfaces.screen === undefined) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету intefaces.screen'
    //     });
    // }
    //
    // //Request
    // if (!message.meta.request) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету request'
    //     });
    // }
    //
    // if (!message.meta.request.command === undefined) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету command'
    //     });
    // }
    //
    // if (!message.meta.request.nlu === undefined) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету nlu'
    //     });
    // }
    //
    // if (!message.meta.request.nlu.entities === undefined) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету nlu entities'
    //     });
    // }
    //
    // if (!message.meta.request.nlu.tokens) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету nlu tokens'
    //     });
    // }
    //
    // if (!message.meta.request.original_utterance) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету original_utterance'
    //     });
    // }
    //
    // if (!message.request.type) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету type'
    //     });
    // }
    //
    // //session
    // if (!message.session) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету сессии'
    //     });
    // }
    //
    // if (!message.session.user_id) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету userid'
    //     });
    // }
    //
    // if (!message.session.new === undefined) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету 1'
    //     });
    // }
    //
    // if (!message.session.message_id === undefined) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету message_id'
    //     });
    // }
    //
    // if (!message.session.session_id) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету session_id'
    //     });
    // }
    //
    // if (!message.session.skill_id) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету skill_id'
    //     });
    // }
    //
    //
    // if (!message.session.user_id) {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету user_id'
    //     });
    // }
    //
    // if (message.version !== '1.0') {
    //     return wrapResponse(incomingMessage, {
    //         text: 'нету version'
    //     });
    // }

    // Проверка Response
    // проверяется ответ без картинки
    if (incomingMessage.request.command.toLowerCase() === '1') {
        return {
            response: {
                text: 'Здравствуйте! Это мы, хороводоведы.',
                tts: 'Здравствуйте! Это мы, хоров+одо в+еды.',
                buttons: [
                    {
                        title: 'Надпись на кнопке',
                        payload: {},
                        url: 'https://example.com/',
                        hide: true,
                    },
                ],
                end_session: false,
            },
            version: '1.0',
        };
    }

    if (incomingMessage.request.command.toLowerCase() === '2') {
        return {
            response: {
                text: 'Здравствуйте! Это мы, хороводоведы.',
                tts: 'Здравствуйте! Это мы, хоров+одо в+еды.',
                buttons: [
                    {
                        title: 'Надпись на кнопке',
                        payload: {},
                        url: 'https://example.com/',
                        hide: true,
                    },
                ],
                end_session: false,
            },
            session: {
                session_id: '2eac4854-fce721f3-b845abba-20d60',
                message_id: 4,
                user_id: 'AC9WC3DF6FCE052E45A4566A48E6B7193774B84814CE49A922E163B8B29881DC',
            },

            version: '2.0',
        };
    }

    if (incomingMessage.request.command.toLowerCase() === '3') {
        return {
            response: {
                text: 'Здравствуйте! Это мы, хороводоведы.',
                tts: 'Здравствуйте! Это мы, хоров+одо в+еды.',
                buttons: [
                    {
                        title: 'Надпись на кнопке',
                        payload: {},
                        url: 'https://example.com/',
                        hide: true,
                    },
                ],
                end_session: false,
            },
            session: {
                session_id: '2eac4854-fce721f3-b845abba-20d60',
                message_id: 4,
                user_id: 'AC9WC3DF6FCE052E45A4566A48E6B7193774B84814CE49A922E163B8B29881DC',
            },
        };
    }

    if (incomingMessage.request.command.toLowerCase() === '4') {
        return {
            response: {
                text: 'Здравствуйте! Это мы, хороводоведы.',
                tts: 'Здравствуйте! Это мы, хоров+одо в+еды.',
                buttons: [
                    {
                        title: 'Надпись на кнопке',
                        payload: {},
                        url: 'https://example.com/',
                        hide: true,
                    },
                ],
                end_session: false,
            },
            session: {
                message_id: 4,
                user_id: 'AC9WC3DF6FCE052E45A4566A48E6B7193774B84814CE49A922E163B8B29881DC',
            },

            version: '1.0',
        };
    }

    if (incomingMessage.request.command.toLowerCase() === '5') {
        return {
            response: {
                text: 'Здравствуйте! Это мы, хороводоведы.',
                tts: 'Здравствуйте! Это мы, хоров+одо в+еды.',
                buttons: [
                    {
                        title: 'Надпись на кнопке',
                        payload: {},
                        url: 'https://example.com/',
                        hide: true,
                    },
                ],
                end_session: false,
            },
            session: {
                session_id: '2eac4854-fce721f3-b845abba-20d60',
                user_id: 'AC9WC3DF6FCE052E45A4566A48E6B7193774B84814CE49A922E163B8B29881DC',
            },

            version: '1.0',
        };
    }

    if (incomingMessage.request.command.toLowerCase() === '6') {
        return {
            response: {
                text: 'Здравствуйте! Это мы, хороводоведы.',
                tts: 'Здравствуйте! Это мы, хоров+одо в+еды.',
                buttons: [
                    {
                        title: 'Надпись на кнопке',
                        payload: {},
                        url: 'https://example.com/',
                        hide: true,
                    },
                ],
                end_session: false,
            },
            session: {
                session_id: '2eac4854-fce721f3-b845abba-20d60',
                message_id: 4,
            },

            version: '1.0',
        };
    }

    if (incomingMessage.request.command.toLowerCase() === '7') {
        return wrapResponse(incomingMessage, {
            text:
                'Здравствуйте!Это мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.Здравствуйте!' +
                'Это мы, хороводоведы.Здравствуйте!Это мы, хороводоведы.' +
                'Здравствуйте!Это мы, хороводоведы.Здравствуйте!' +
                'Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.Здравствуйте!' +
                'Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.Здравствуйте!Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.',
            tts: 'привет друг я сломан',
            buttons: [
                {
                    title: 'Нажми на меня',
                    payload: {},
                    url: 'https://example.com/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '8') {
        return wrapResponse(incomingMessage, {
            text: 'Привет сейчас ты увидешь ошибку',
            tts:
                'Здравствуйте!Это мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.' +
                'Здравствуйте! мымыЭто мы, хороводоведы.Здравствуйте!' +
                'Это мы, хороводоведы.Здравствуйте!Это мы, хороводоведы.' +
                'Здравствуйте!Это мы, хороводоведы.Здравствуйте!' +
                'Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.Здравствуйте!' +
                'Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.Здравствуйте!Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.' +
                'Здравствуйте! Это мы, хороводоведы.Здравствуйте! Это мы, хороводоведы.',
            buttons: [
                {
                    title: 'Нажми на меня',
                    payload: {},
                    url: 'https://example.com/',
                    hide: false,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '9') {
        return wrapResponse(incomingMessage, {
            tts: 'Отсуствует поле текст',
            buttons: [
                {
                    title: 'Нажми на меня',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: false,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '10') {
        return wrapResponse(incomingMessage, {
            tts: 'Отсуствует поле текст',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '11') {
        return wrapResponse(incomingMessage, {
            text: 'тут не будет ттс',
            buttons: [
                {
                    title: 'Нажми на меня',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: false,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '12') {
        return wrapResponse(incomingMessage, {
            text: 'отсуствует title в кнопке',
            tts: 'отсуствует title в кнопке',
            buttons: [
                {
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: false,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '13') {
        return wrapResponse(incomingMessage, {
            text: 'заголовок кнопки больше 64',
            tts: 'заголовок кнопки больше 64',
            buttons: [
                {
                    title: '!!у меня слишком большой заголовок поэтому будет ошибка мой друг!!!!!!!!!!!!у меня',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: false,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '14') {
        return wrapResponse(incomingMessage, {
            text: 'нету url в кнопке',
            tts: 'нету url в кнопке4',
            buttons: [
                {
                    title: 'нету url в кнопке',
                    payload: {},
                    hide: false,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '15') {
        return wrapResponse(incomingMessage, {
            text: 'обычная кнопка',
            tts: 'нобычная кнопка',
            buttons: [
                {
                    title: 'Нажми на меня',
                    url: 'https://www.reddit.com/r/Music/',
                    payload: {},
                    hide: false,
                },
            ],
            end_session: false,
        });
    }



    if (incomingMessage.request.command.toLowerCase() === '16') {
        return wrapResponse(incomingMessage, {
            text: 'нету hide в кнопке',
            tts: 'нету hide в кнопке',
            buttons: [
                {
                    title: 'нету url в кнопке',
                    url: 'https://www.reddit.com/r/Music/',
                    payload: {},
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '17') {
        return wrapResponse(incomingMessage, {
            text: 'отсуствует end_session',
            tts: 'отсуствует end_session',
            buttons: [
                {
                    title: 'отсуствует end_session',
                    url: 'https://www.reddit.com/r/Music/',
                },
            ],
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '18') {
        return wrapResponse(incomingMessage, {
            text: 'В МИДе прокомментировали учения НАТО Trident Junction. \n Интересно?"',
            tts: 'В МИДе прокомментировали учения НАТО Trident Junction. - Интересно?"',
            buttons: [
                {
                    title: 'нету url в кнопке',
                    url: 'https://iz.ru/804772/2018-10-25/v-mid-prokommentirovali-ucheniia-nato-trident-junction',
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '49') {
        return wrapResponse(incomingMessage, {
            text: 'В МИДе прокомментировали учения НАТО Trident Junction. \n Интересно?"',
            tts: 'В МИДе прокомментировали учения НАТО Trident Junction. - Интересно?"',
            buttons: [
                {
                    title: 'нету url в кнопке',
                    url: 'https://iz.ru/804772/2018-10-25/v-mid-prokommentirovali-ucheniia-nato-trident-junction',
                },
            ],
            end_session: true,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '19') {
        return wrapResponse(incomingMessage, {
            text: 'В МИДе прокомментировали учения НАТО Trident Junction. \\n Интересно?"',
            tts: 'В МИДе прокомментировали учения НАТО Trident Junction. - Интересно?"',
            buttons: [
                {
                    title: 'перенос2',
                    url: 'https://iz.ru/804772/2018-10-25/v-mid-prokommentirovali-ucheniia-nato-trident-junction',
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '20') {
        return wrapResponse(incomingMessage, {
            text: 'В МИДе прокомментировали учения НАТО Trident Junction. \\\n Интересно?"',
            tts: 'В МИДе прокомментировали учения НАТО Trident Junction. - Интересно?"',
            buttons: [
                {
                    title: 'нету url в кнопке',
                    url: 'https://iz.ru/804772/2018-10-25/v-mid-prokommentirovali-ucheniia-nato-trident-junction',
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '21') {
        return wrapResponse(incomingMessage, {
            text: 'Привет',
            tts:
                '<speaker audio="dialogs-upload/026ac948-d518-4fd4-a103-8b9d8cce6cd8/8c55bdaf-cefe-4a5c-8363-16013cd8c455.opus">Привет',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '22') {
        return wrapResponse(incomingMessage, {
            text: 'Слушай чиптюн',
            tts:
                '<speaker audio="dialogs-upload/7e160623-23e0-45bd-98df-15741100b508/c45d817c-186d-40f4-bda9-2c585109d817.opus">Слушай чиптюн',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '23') {
        return wrapResponse(incomingMessage, {
            text: 'сайджесты',
            tts: 'сайджесты',
            buttons: [
                {
                    title: '4',
                    hide: false,
                    payload: {
                        text: 'привет друг1',
                    },
                },
                {
                    title: '1',
                    hide: false,
                    payload: {
                        text: 'привет друг2',
                    },
                },
                {
                    title: '2',
                    hide: false,
                    payload: {
                        text: 'привет друг3',
                    },
                },
                {
                    title: '3',
                    hide: false,
                    payload: {
                        text: 'привет друг3',
                    },
                },
                {
                    title: '4',
                    hide: false,
                    payload: {
                        text: 'привет друг4',
                    },
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '24') {
        return wrapResponse(incomingMessage, {
            text: 'В МИДе прокомментировали учения НАТО Trident Junction. \n Интер\nесно?"',
            tts: 'В МИДе прокомментировали учения НАТО Trident Junction. - Интересно?"',
            buttons: [
                {
                    title: 'нету url в кнопке',
                    url: 'https://iz.ru/804772/2018-10-25/v-mid-prokommentirovali-ucheniia-nato-trident-junction',
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '25') {
        return wrapResponse(incomingMessage, {
            text: 'Получи смайлик 🤔🤔',
            tts: 'Получи смайлик',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '🤔') {
        return wrapResponse(incomingMessage, {
            text: '🤔🤔🤔🤔',
            tts: 'Получи смайлик',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '27') {
        return wrapResponse(incomingMessage, {
            text: 'Жди вкусную пиццу',
            tts: 'Жди вкусную пиццу',
            end_session: false,
        });
    }

    // проверяется ответ с картинкой
    if (incomingMessage.request.command.toLowerCase() === '28') {
        return wrapResponse(incomingMessage, {
            text: 'лови картинку',
            tts: 'лови картинку',
            card: {
                type: 'BigImage',
                image_id: '1652229/c199f41cab241ae42d9c',
                title: 'лови картинку',
                description: 'лови картинку',
                button: {
                    text: 'лови картинку',
                    url: 'https://www.reddit.com/r/Music/',
                },
            },
            buttons: [
                {
                    title: 'лови картинку',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '29') {
        return wrapResponse(incomingMessage, {
            text: 'лови картинку',
            tts: 'лови картинку',
            card: {
                type: 'BigImage',
                image_id: '3F10D5857AB85CFE4C31635E46DAE9D40ED4505DBB67C3E1AC95DB2614241D70',
                title: 'лови картинку',
                description: 'лови картинку',
                button: {
                    text: 'лови картинку',
                    url: 'https://www.reddit.com/r/Music/',
                },
            },
            buttons: [
                {
                    title: 'лови картинку',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '30') {
        return wrapResponse(incomingMessage, {
            text: 'лови картинку',
            tts: 'лови картинку',
            card: {
                type: 'BigImage',
                image_id: '1652229/c199f41cab241ae42d9c',
                title: 'лови картинку',
                description: 'лови картинку',
                button: {
                    text: 'лови картинку',
                    url: 'https://www.reddit.com/r/Music/',
                },
            },
            buttons: [
                {
                    title: 'лови картинку',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: true,
                },

                {
                    title: 'люишь картинки',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: false,
                },
            ],

            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '31') {
        return wrapResponse(incomingMessage, {
            text: 'Здравствуйте! ‘Это мы, хороводоведы.',
            tts: 'Здравствуйте! ‘Это мы, хоров+одо в+еды.',
            card: {
                type: 'BigImage',
                title: 'Заголовок для изображения',
                description: 'Описание изображения.',
                button: {
                    text: 'Надпись на кнопке',
                    url: 'https://www.reddit.com/r/Music/',
                },
            },
            buttons: [
                {
                    title: 'Надпись на кнопке',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '32') {
        return wrapResponse(incomingMessage, {
            text: 'Ошибка сервера: card/type',
            tts: 'Ошибка сервера: card/type',
            card: {
                image_id: '1652229/c199f41cab241ae42d9c',
                title: 'картинка',
                description: 'картинка',
                button: {
                    text: 'картинка',
                    url: 'https://www.reddit.com/r/Music/',
                },
            },
            buttons: [
                {
                    title: 'Надпись на кнопке',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '33') {
        return wrapResponse(incomingMessage, {
            text: 'отсутвует title',
            tts: 'отсутвует title',
            card: {
                type: 'BigImage',
                image_id: '1652229/c199f41cab241ae42d9c',
                description: 'картинка',
                button: {
                    text: 'картинка',
                    url: 'https://www.reddit.com/r/Music/',
                },
            },
            buttons: [
                {
                    title: 'Надпись на кнопке',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '34') {
        return wrapResponse(incomingMessage, {
            text: 'Ошибка сервера: card/type',
            tts: 'Ошибка сервера: card/type',
            card: {
                type: 'BigImage',
                image_id: '1652229/c199f41cab241ae42d9c',
                title: 'картинка',
                button: {
                    text: 'картинка',
                    url: 'https://www.reddit.com/r/Music/',
                },
            },
            buttons: [
                {
                    title: 'Надпись на кнопке',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '35') {
        return wrapResponse(incomingMessage, {
            text: 'Посмотри на галлерею картинок',
            tts: 'Посмотри на галлерею картинок',
            card: {
                type: 'ItemsList',
                header: {
                    text: 'Галлерея картинок',
                },
                items: [
                    {
                        image_id: '1652229/290b313ea588a8771bba',
                        title: 'make pepe great again.',
                        description: 'make pepe great again.',
                        button: {
                            text: 'make pepe great again.',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        image_id: '965417/9d7cbcd04feae6ef7dbd',
                        title: 'make pepe again',
                        description: 'make pepe again',
                        button: {
                            text: 'make pepe again',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        image_id: '1521359/6bc78d704b527fc22f23',
                        title: 'steins gate',
                        description: 'steins gate',
                        button: {
                            text: 'steins gate',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },

                    {
                        image_id: '965417/9d7cbcd04feae6ef7dbd',
                        title: 'make pepe again',
                        description: 'make pepe again',
                        button: {
                            text: 'make pepe again',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        image_id: '1521359/6bc78d704b527fc22f23',
                        title: 'steins gate',
                        description: 'steins gate',
                        button: {
                            text: 'steins gate',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                ],
                footer: {
                    text: 'Кнопка "тест"',
                    button: {
                        text: 'Нажми на кнопку',
                        url: 'https://example.com/',
                        payload: {},
                    },
                },
            },
            buttons: [
                {
                    title: 'нопка "тест',
                    payload: {},
                    url: 'https://example.com/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '36') {
        return wrapResponse(incomingMessage, {
            text: 'Посмотри на галлерею картинок',
            tts: 'Посмотри на галлерею картинок',
            card: {
                header: {
                    text: 'Галлерея картинок',
                },
                items: [
                    {
                        image_id: '1652229/290b313ea588a8771bba',
                        title: 'make pepe great again.',
                        description: 'make pepe great again.',
                    },
                    {
                        image_id: '965417/9d7cbcd04feae6ef7dbd',
                        title: 'make pepe again',
                        description: 'make pepe again',
                    },
                    {
                        image_id: '1521359/6bc78d704b527fc22f23',
                        title: 'steins gate',
                        description: 'steins gate',
                    },

                    {
                        image_id: '965417/9d7cbcd04feae6ef7dbd',
                        title: 'make pepe again',
                        description: 'make pepe again',
                    },
                    {
                        image_id: '1521359/6bc78d704b527fc22f23',
                        title: 'steins gate',
                        description: 'steins gate',
                    },
                ],
                footer: {
                    text: 'Кнопка "тест"',
                    button: {
                        text: 'Нажми на кнопку',
                        url: 'https://example.com/',
                        payload: {},
                    },
                },
            },
            buttons: [
                {
                    title: 'нопка "тест',
                    payload: {},
                    url: 'https://example.com/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '37') {
        return wrapResponse(incomingMessage, {
            text: 'Посмотри на галлерею картинок',
            tts: 'Посмотри на галлерею картинок',
            card: {
                type: 'ItemsList',
                header: {
                    text: 'Галлерея картинок',
                },
                items: [
                    {
                        title: 'make pepe great again.',
                        description: 'make pepe great again.',
                        button: {
                            text: 'make pepe great again.',
                            payload: {},
                        },
                    },
                    {
                        title: 'make pepe again',
                        description: 'make pepe again',
                        button: {
                            text: 'make pepe again',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        title: 'steins gate',
                        description: 'steins gate',
                        button: {
                            text: 'steins gate',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },

                    {
                        title: 'make pepe again',
                        description: 'make pepe again',
                        button: {
                            text: 'make pepe again',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        title: 'steins gate',
                        description: 'steins gate',
                        button: {
                            text: 'steins gate',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                ],
                footer: {
                    text: 'Кнопка "тест"',
                    button: {
                        text: 'Нажми на кнопку',
                        url: 'https://example.com/',
                        payload: {},
                    },
                },
            },
            buttons: [
                {
                    title: 'нопка "тест',
                    payload: {},
                    url: 'https://example.com/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '38') {
        return wrapResponse(incomingMessage, {
            abc: '123hgj',
            ttts: 'ffwef',
            abdsabsdjk: 'asdjgj: {{{{{{[[][][][][',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '39') {
        return wrapResponse(incomingMessage, {
            abc: '123hgjRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
            ttts: 'ffwefRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRRR',
            abdsabsdjk: 'asdjgj: {{{{{{[[][][][][4234234234234',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '40') {
        return wrapResponse(incomingMessage, {
            ацауац: '&#77;',
            dvwef: 'лови картинку',
            cwfewef: {
                ewfwef: 'BigImage',
                image_id: '&#2',
                title: 'лови картинку',
                description: 'лови картинку',
                button: {
                    text: 'лови картинку',
                    url: 'https://www.reddit.com/r/Music/',
                },
            },
            buttons: [
                {
                    title: 'лови картинку',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: true,
                },
            ],
            efweffewn: false,
            end_session: false,
        });
    }

    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    if (incomingMessage.request.command.toLowerCase() === '41') {
        return wrapResponse(incomingMessage, {
            text: '&#77;',
            tts: '&#77;',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '2 секунды') {
        await sleep(2000);
        return wrapResponse(incomingMessage, {
            text: '2 секунды',
            tts: '2 секунды',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '3 полных секунды') {
        await sleep(3000);
        return wrapResponse(incomingMessage, {
            text: '3 полных секунды',
            tts: '3 полных секунды',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '3 секунды') {
        await sleep(2900);
        return wrapResponse(incomingMessage, {
            text: '3 секунды',
            tts: '3 секунды',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '2,5 секунды') {
        await sleep(2500);
        return wrapResponse(incomingMessage, {
            text: '2,5 секунды',
            tts: '2,5 секунды',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '2,8 секунды') {
        await sleep(2800);
        return wrapResponse(incomingMessage, {
            text: '2,8 секунды',
            tts: '2,8 секунды',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === 'часы') {
        await sleep(1900);
        return wrapResponse(incomingMessage, {
            text: '1,9 секунды',
            tts: '1,9 секунды',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === 'авторизация') {
        return {
            start_account_linking: {},
            session: message.session,
            version: message.version,
        };
    }

    if (incomingMessage.request.command.toLowerCase() === 'оплата') {
        return {
            start_purchase: {},
            start_account_linking: {},
            session: message.session,
            version: message.version,
        };
    }

    if (incomingMessage.request.command.toLowerCase() === 'баланс') {
        const rsp = wrapResponse(incomingMessage, {
            text: 'ты молодец',
            tts: 'ты молодец',
            end_session: false,
        });

        return {
            ...rsp,
            start_account_linking: {},
        };
    }

    if ('account_linking_complete_event' in incomingMessage) {
        const risp = wrapResponse(incomingMessage, {
            text: 'ты молодец',
            tts: 'ты молодец',
            end_session: false,
        });

        return {
            ...risp,
            account_linking_complete_event: {},
            meta: {
                client_id: 'ru.yandex.searchplugin/7.16 (none none; android 4.4.2)',
                interfaces: {
                    account_linking: {},
                    payments: {},
                    screen: {},
                },
                locale: 'ru-RU',
                timezone: 'UTC',
            },
            session: {
                message_id: 2,
                new: false,
                session_id: '6c19d3ef-9f4300bf-f11e501b-b63dbfb3',
                skill_id: '7e160623-23e0-45bd-98df-15741100b508',
                user_id: '65F9D704AB6BE4EED06E5CFDE84E519EE30DA3D077CC9AC7845D49F1E604E4F6',
            },
            version: '1.0',
        };
    }

    if (incomingMessage.request.command.toLowerCase() === '1 и 9 секунды') {
        await sleep(2500);
        return wrapResponse(incomingMessage, {
            text: '1 и 9 секунды',
            tts: '1 и 9 секунды',
            end_session: false,
        });
    }
    if (incomingMessage.request.command.toLowerCase() === '42') {
        return wrapResponse(incomingMessage, {
            text: 'Ставка поднята до 100Для продолжения игр+ы скажите «Новый раунд» или «Играть»!',
            tts: 'Ставка поднята до 100Для продолжения игр+ы скажите «Новый раунд» или «Играть»!',
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '43') {
        return wrapResponse(incomingMessage, {
            text: 'Посмотри на галлерею картинок',
            tts: 'Посмотри на галлерею картинок',
            card: {
                type: 'ItemsList',
                header: {
                    text: 'Галлерея картинок',
                },
                items: [
                    {
                        image_id: '1652229/290b313ea588a8771bba',
                        title: 'make pepe great again.',
                        description: 'make pepe great again.',
                        button: {
                            text: 'make pepe great again.',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        image_id: '965417/9d7cbcd04feae6ef7dbd',
                        title: 'make pepe again',
                        description: 'make pepe again',
                        button: {
                            text: 'make pepe again',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        image_id: '1521359/6bc78d704b527fc22f23',
                        title: 'steins gate',
                        description: 'steins gate',
                        button: {
                            text: 'steins gate',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },

                    {
                        image_id: '965417/9d7cbcd04feae6ef7dbd',
                        title: 'make pepe again',
                        description: 'make pepe again',
                        button: {
                            text: 'make pepe again',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        image_id: '1521359/6bc78d704b527fc22f23',
                        title: 'steins gate',
                        description: 'steins gate',
                        button: {
                            text: 'steins gate',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        image_id: '1521359/6bc78d704b527fc22f23',
                        title: 'steins gate',
                        description: 'steins gate',
                        button: {
                            text: 'steins gate',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                ],
                footer: {
                    text: 'Кнопка "тест"',
                    button: {
                        text: 'Нажми на кнопку',
                        url: 'https://example.com/',
                        payload: {},
                    },
                },
            },
            buttons: [
                {
                    title: 'нопка "тест',
                    payload: {},
                    url: 'https://example.com/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '44') {
        return wrapResponse(incomingMessage, {
            text: 'Посмотри на галлерею картинок',
            tts: 'Посмотри на галлерею картинок',
            card: {
                type: 'ItemsList',
                header: {
                    text: 'Галлерея картинок',
                },
                xxxx: [
                    {
                        image_id: '1652229/290b313ea588a8771bba',
                        title: 'make pepe great again.',
                        description: 'make pepe great again.',
                        button: {
                            text: 'make pepe great again.',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        image_id: '965417/9d7cbcd04feae6ef7dbd',
                        title: 'make pepe again',
                        description: 'make pepe again',
                        button: {
                            text: 'make pepe again',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        image_id: '1521359/6bc78d704b527fc22f23',
                        title: 'steins gate',
                        description: 'steins gate',
                        button: {
                            text: 'steins gate',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },

                    {
                        image_id: '965417/9d7cbcd04feae6ef7dbd',
                        title: 'make pepe again',
                        description: 'make pepe again',
                        button: {
                            text: 'make pepe again',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                    {
                        image_id: '1521359/6bc78d704b527fc22f23',
                        title: 'steins gate',
                        description: 'steins gate',
                        button: {
                            text: 'steins gate',
                            url: 'http://example.com/',
                            payload: {},
                        },
                    },
                ],
                footer: {
                    text: 'Кнопка "тест"',
                    button: {
                        text: 'Нажми на кнопку',
                        url: 'https://example.com/',
                        payload: {},
                    },
                },
            },
            buttons: [
                {
                    title: 'нопка "тест',
                    payload: {},
                    url: 'https://example.com/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    //звуки и эффекты
    if (incomingMessage.request.command.toLowerCase() === '45') {
        return wrapResponse(incomingMessage, {
            text: 'лови картинку',
            tts: '<speaker effect="megaphone">лови картинку<speaker effect="-">мой друг',
            card: {
                type: 'BigImage',
                image_id: '1652229/c199f41cab241ae42d9c',
                title: 'лови картинку',
                description: 'лови картинку',
                button: {
                    text: 'лови картинку',
                    url: 'https://www.reddit.com/r/Music/',
                },
            },
            buttons: [
                {
                    title: 'лови картинку',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '46') {
        return wrapResponse(incomingMessage, {
            text: 'лови картинку',
            tts: '<speaker audio="alice-music-drums-3.opus">',
            card: {
                type: 'BigImage',
                image_id: '1652229/c199f41cab241ae42d9c',
                title: 'лови картинку',
                description: 'лови картинку',
                button: {
                    text: 'лови картинку',
                    url: 'https://www.reddit.com/r/Music/',
                },
            },
            buttons: [
                {
                    title: 'лови картинку',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '47') {
        return wrapResponse(incomingMessage, {
            text: 'кашу с тобой не сваришь',
            tts: '<speaker audio="alice-sounds-game-win-1.opus"> У вас получилось!',
            buttons: [
                {
                    title: 'кашу не сваришь',
                    payload: {},
                    url: 'https://www.reddit.com/r/Music/',
                    hide: true,
                },
            ],
            end_session: false,
        });
    }

    if (incomingMessage.request.command.toLowerCase() === '48') {
        return wrapResponse(incomingMessage, {
            text: 'сделай мне донат',
            tts: 'сделай мне донат',
            buttons: [
                {
                    title: 'донат',
                    url: 'https://dialogs.priemka.voicetech.yandex.ru/store/skills/8a6fa992-odin-den-ivana?action=donation',
                },
            ],
            end_session: false,
        });
    }

    return wrapResponse(incomingMessage, {
        text:
            'привет я тестовый навык, который поможет тебе проверить работает ли яндекс диалоги правильно давай начнем:\n',
        end_session: false,
    });
}

const wrapResponse = (message: any, body: any): any => ({
    response: body,
    session: message.session,
    version: message.version,
});
