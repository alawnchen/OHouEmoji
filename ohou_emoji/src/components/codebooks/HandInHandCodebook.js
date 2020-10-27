export function HandInHandCodebook() {
    const tag = "👫"
    const scale = 2
    const encryptCodebook = {
        A: ['👩🏻‍🤝‍👨🏼', '👩🏻‍🤝‍👩🏼'],
        B: ['👩🏻‍🤝‍👨🏽', '👩🏻‍🤝‍👨🏾'],
        C: ['👩🏻‍🤝‍👨🏿', '👩🏼‍🤝‍👨🏻'],
        D: ['👫🏼', '👩🏼‍🤝‍👨🏽'],
        E: ['👩🏼‍🤝‍👨🏾', '👩🏼‍🤝‍👨🏿'],
        F: ['👩🏽‍🤝‍👨🏻', '👩🏽‍🤝‍👨🏼'],
        G: ['👫🏽', '👩🏽‍🤝‍👨🏾'],
        H: ['👩🏽‍🤝‍👨🏿', '👩🏾‍🤝‍👨🏻'],
        I: ['👩🏾‍🤝‍👨🏼', '👩🏾‍🤝‍👨🏽'],
        J: ['👫🏾', '👩🏾‍🤝‍👨🏿'],
        K: ['👩🏿‍🤝‍👨🏻', '👩🏿‍🤝‍👨🏼'],
        L: ['👩🏿‍🤝‍👨🏽', '👩🏿‍🤝‍👨🏾'],
        M: ['👫🏿', '👬🏿'],
        N: ['👩🏻‍🤝‍👩🏽', '👩🏻‍🤝‍👩🏾'],
        O: ['👩🏻‍🤝‍👩🏿', '👩🏼‍🤝‍👩🏻'],
        P: ['👭🏼', '👩🏼‍🤝‍👩🏽'],
        Q: ['👩🏼‍🤝‍👩🏾', '👩🏼‍🤝‍👩🏿'],
        R: ['👩🏽‍🤝‍👩🏻', '👩🏽‍🤝‍👩🏼'],
        S: ['👭🏽', '👩🏽‍🤝‍👩🏾'],
        T: ['👩🏽‍🤝‍👩🏿', '👩🏾‍🤝‍👩🏻'],
        U: ['👩🏾‍🤝‍👩🏼', '👩🏾‍🤝‍👩🏽'],
        V: ['👭🏾', '👩🏾‍🤝‍👩🏿'],
        W: ['👩🏿‍🤝‍👩🏻', '👩🏿‍🤝‍👩🏼'],
        X: ['👩🏿‍🤝‍👩🏽', '👩🏿‍🤝‍👩🏾'],
        Y: ['👭🏿', '👬'],
        Z: ['👨🏻‍🤝‍👨🏽', '👨🏻‍🤝‍👨🏾'],
        1: ['👨🏻‍🤝‍👨🏿', '👨🏼‍🤝‍👨🏻'],
        2: ['👬🏼', '👨🏼‍🤝‍👨🏽'],
        3: ['👨🏼‍🤝‍👨🏾', '👨🏼‍🤝‍👨🏿'],
        4: ['👨🏽‍🤝‍👨🏻', '👨🏽‍🤝‍👨🏼'],
        5: ['👬🏽', '👨🏽‍🤝‍👨🏾'],
        6: ['👨🏽‍🤝‍👨🏿', '👨🏾‍🤝‍👨🏻'],
        7: ['👨🏾‍🤝‍👨🏼', '👨🏾‍🤝‍👨🏽'],
        8: ['👬🏾', '👨🏾‍🤝‍👨🏿'],
        9: ['👨🏿‍🤝‍👨🏻', '👨🏿‍🤝‍👨🏼'],
        0: ['👨🏿‍🤝‍👨🏽', '👨🏿‍🤝‍👨🏾']
    }

    const decryptCodebook = {
        '👩🏻‍🤝‍👩🏼': 'A',
        '👩🏻‍🤝‍👨🏾': 'B',
        '👩🏼‍🤝‍👨🏻': 'C',
        '👩🏼‍🤝‍👨🏽': 'D',
        '👩🏼‍🤝‍👨🏿': 'E',
        '👩🏽‍🤝‍👨🏼': 'F',
        '👩🏽‍🤝‍👨🏾': 'G',
        '👩🏾‍🤝‍👨🏻': 'H',
        '👩🏾‍🤝‍👨🏽': 'I',
        '👩🏾‍🤝‍👨🏿': 'J',
        '👩🏿‍🤝‍👨🏼': 'K',
        '👩🏿‍🤝‍👨🏾': 'L',
        '👬🏿': 'M',
        '👩🏻‍🤝‍👩🏾': 'N',
        '👩🏼‍🤝‍👩🏻': 'O',
        '👩🏼‍🤝‍👩🏽': 'P',
        '👩🏼‍🤝‍👩🏿': 'Q',
        '👩🏽‍🤝‍👩🏼': 'R',
        '👩🏽‍🤝‍👩🏾': 'S',
        '👩🏾‍🤝‍👩🏻': 'T',
        '👩🏾‍🤝‍👩🏽': 'U',
        '👩🏾‍🤝‍👩🏿': 'V',
        '👩🏿‍🤝‍👩🏼': 'W',
        '👩🏿‍🤝‍👩🏾': 'X',
        '👬': 'Y',
        '👨🏻‍🤝‍👨🏾': 'Z',
        '👨🏼‍🤝‍👨🏻': '1',
        '👨🏼‍🤝‍👨🏽': '2',
        '👨🏼‍🤝‍👨🏿': '3',
        '👨🏽‍🤝‍👨🏼': '4',
        '👨🏽‍🤝‍👨🏾': '5',
        '👨🏾‍🤝‍👨🏻': '6',
        '👨🏾‍🤝‍👨🏽': '7',
        '👨🏾‍🤝‍👨🏿': '8',
        '👨🏿‍🤝‍👨🏼': '9',
        '👨🏿‍🤝‍👨🏾': '0',
        '👩🏻‍🤝‍👨🏼': 'A',
        '👩🏻‍🤝‍👨🏽': 'B',
        '👩🏻‍🤝‍👨🏿': 'C',
        '👫🏼': 'D',
        '👩🏼‍🤝‍👨🏾': 'E',
        '👩🏽‍🤝‍👨🏻': 'F',
        '👫🏽': 'G',
        '👩🏽‍🤝‍👨🏿': 'H',
        '👩🏾‍🤝‍👨🏼': 'I',
        '👫🏾': 'J',
        '👩🏿‍🤝‍👨🏻': 'K',
        '👩🏿‍🤝‍👨🏽': 'L',
        '👫🏿': 'M',
        '👩🏻‍🤝‍👩🏽': 'N',
        '👩🏻‍🤝‍👩🏿': 'O',
        '👭🏼': 'P',
        '👩🏼‍🤝‍👩🏾': 'Q',
        '👩🏽‍🤝‍👩🏻': 'R',
        '👭🏽': 'S',
        '👩🏽‍🤝‍👩🏿': 'T',
        '👩🏾‍🤝‍👩🏼': 'U',
        '👭🏾': 'V',
        '👩🏿‍🤝‍👩🏻': 'W',
        '👩🏿‍🤝‍👩🏽': 'X',
        '👭🏿': 'Y',
        '👨🏻‍🤝‍👨🏽': 'Z',
        '👨🏻‍🤝‍👨🏿': '1',
        '👬🏼': '2',
        '👨🏼‍🤝‍👨🏾': '3',
        '👨🏽‍🤝‍👨🏻': '4',
        '👬🏽': '5',
        '👨🏽‍🤝‍👨🏿': '6',
        '👨🏾‍🤝‍👨🏼': '7',
        '👬🏾': '8',
        '👨🏿‍🤝‍👨🏻': '9',
        '👨🏿‍🤝‍👨🏽': '0'
    }

    return {
        tag,
        scale,
        encryptCodebook,
        decryptCodebook
    }
}