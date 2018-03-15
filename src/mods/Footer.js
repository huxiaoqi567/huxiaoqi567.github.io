import {createElement, Component} from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import {intl, I18nView} from '@ali/rax-intl';

class App extends Component {
  render() {
    return (
      <View>
        <I18nView style={{...styles.appHeader, flexDirection: 'row'}}>
          <View style={styles.box1}>
            <Image source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABFCAYAAAAcjSspAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYmMxMWQ0Ni01YmIyLTRhMmUtYWFjMS1kZWE5MWMyNGIyNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzQyMTY4Q0U5QUYyMTFFNEJGNDBDREVCRTZBOUQzMjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzQyMTY4Q0Q5QUYyMTFFNEJGNDBDREVCRTZBOUQzMjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzgzMTVEQjk3RUIxMUU0ODAxMUJBMkI5NTU5OTZGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMzgzMTVEQzk3RUIxMUU0ODAxMUJBMkI5NTU5OTZGMSIvPiA8L3Jk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'
            }}
              style={{
                width: 46,
                height: 46,
              }} />
            <Text style={styles.text}>
              {intl.getText('t29')}
            </Text>
          </View>
          <View style={styles.box2}>
            <Image source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAA/CAYAAACYcSQcAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYmMxMWQ0Ni01YmIyLTRhMmUtYWFjMS1kZWE5MWMyNGIyNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzQyMTY4RDI5QUYyMTFFNEJGNDBDREVCRTZBOUQzMjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzQyMTY4RDE5QUYyMTFFNEJGNDBDREVCRTZBOUQzMjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowM0M5NzQwQjk3RUIxMUU0ODAxMUJBMkI5NTU5OTZGMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowM0M5NzQwQzk3RUIxMUU0ODAxMUJBMkI5NTU5OTZGMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnlkArAAAAbXSURBVHja7FwJbBRVGH7b0iJQCraKJm0FrBdqlAajtSoK3qQWFUGJwdYjUSLxAFxAa4NYg66QqrQeiUeMIniQSgRF0RIiUURFMILxxLOisaLGAtYefn/mn/Tf19ndObrbobN/8qXzZvfNvvnm/e8/5n8NdXV1qbR4k4w0BWkSfSEDZCMcDmfiTxUwAzgRyPfhmPcB3wKrgSXAnlQPIBKJWJPIBK4CJvv8wQ8CTmBMB8qA3X5R5+sPAAJ1GQ3U+UmdK7XPvgR2AfsdXrMV+M/juMr4938HcrRx5gITRPsKngB7/UDiWHH8I1AC3bccGFS/rx/+y0yeeQ+k2h/6QZ0Hi+O1sQj0ibyitYf40cX51+droa/GJ9X5A6ADGAh87XMSKczawn8z/ETiaeK43uckhoBTRfsh4E+XD+M34FOgEdjp2dk+gKRNa5/s8XrTgFpgOXAT8E8Qwr5kGb2rgTeA7CDMxFjG5ldW0Xjq+5fmkRwJZIpzZ1JkB9wWNBIbOQR0Y7XzmbAFgsxbgY183X6rzlbOt1u3pwW4G5ikrbVPA0cEicQWB1Z9BDDKAhRm1ojvDgdeBLKCos5tCT4vAhYClwJ5Dq5bCiwG5gbFsMSS44B3gUNc9p/D6+Nr/V2d48mTHgg05VmgMKgz8VjgDNH+iR1qPYmbraITMCQFwA18fDD3m8ihcaBIHKe1Kem81WEwch0fj2c3qDZo6qyr8TaH/edybG0KGaeyoJEo748y7p0O++9hx9sUcsaXh8PhYUEzLKa0u+y3EnhdtMmnfCyoJHqRmTyTTZmO2VgZRBIzPfT9AajWzjWAyMKgkZjjsf8y4CPRHsKOeL8nUTckwzxcq4P9RuknXhsEEn/W2gvsJBTiyHY2NFEPpb872xuUUXxwELfnAbOVt8z4oKBFLH8A97OTbEqWR7UOZAJiEbA0mT8QhFRYF4dvlKm+SBnZmGy21oOVw5dSysh2lwSNRFN2KpfvlTWpAp5JRyxJDNDTkiYxTWKaxKCLV+tM7kEFcJ4ydhvkcbxK2eBPgDeB9Sp+aUcqhN43n62MV6b0yuBQjmLIGf8CWAe8pIydCSklsYod2SKLz6j8dwKHWJ/z33V9RCD5dE/pvh3LSD5/FfAAcAuTmVx1DofD9FTr2VcqstFljDIqrfqi0PsyZRSvltj47mHKqHhYnIqZeC9ws0VUsBnYwbHpOFZvKfSkW3hWpEJoDCtVz6wNOdwfK6N2hzSmlNXdlPm8HNUlhUTMwtOVkU6S0sjq+p12nipZG4BTxLmHgSZlbO1IptBavUIL6T5TRpp/k4VKPwhMFecoafGOMipoXatzrHiyTutDdXxTLAgkoZpqqvVbJc5RNvi+JJA2UGvPAo4W7SaecZss+n6vjErZGu3+bSctMjSVNKXQYhaeq6Lrutfz1I9neUllZvAsMIUGPMojaUO1dp5G6HzRpj05tOel1cYy9bxok8dxlsX3hscjsVkcTwFp+tO9RmsnItAUchvuEO1MtoZeRH8IFeJ4KrswpixU9jdR0jhlhdlMC74u6OE/mZvGQdoLyqg2NYVS6+8pY4sZ1aKco7qzul8Bxzj0AprZApLsZqvpRih9Nd5ChcmVolqbsYJE0gSqgnBSyE7VX+V83MaehanitEQcJSdeJBIpGKCtd1eK2VmgLbZStju88U5epM/n9uGq9zdjjmFI2eWQQPPeygVxk+PcU2WUOoNR2ht3o7JXKeBmA2S7Sr10uOjTZnNSzAJnb0epszAgxcwwqUUuW9TjVXTp2RbNyNgR2qVVLNpU3vsL/0Yip3+/6t7tSj4cvYDayA/TjDpK2RsYIfqRMclXzuq59WWNrrFNTAJaMupB4OYea2IC/zCfrXGJsOQj2fLZDb22akvH7CTNvnns58mo5VWbfXPYFuSKyTJJaTXh+s57W2EfOrVoYVuI42a7wb8eSjUkUYWf07yGe5T99yh3CQIVBxYJi+qdxM5N2syr4jU0kZBzfaFokxp8k0QSm1X0/pOTgEdt3Os0nsWm0F7B93s1AYHZ2Gkxox5Xxj+zGBojoF9hESbemQKDUq0ZCNqZv1pZ113Tml/LYw1p/qWt1JjTBMQTbPLlzJrDg1zDwX0WG6WLVXflgUxCbEgBieQz0mvSR8S5cnaU31JGYRKRTDsLLmE/WAr5hsvs/ljI6X9ogpHJZXWZ6PDGlvC6msoEbQ2viU5kLav23jha6S2fiAv8zTOxWtmraaHavss5pEp1hnsRzzQ7XsQ+fsgVymGtjtt3LO1sMEbzQK2iAgrtblfGNohG1XeyhkM1WnJ2WHzeyi5XMafEnNZ1O1fntPTeTEyLkP8FGABBfHlTap2rWgAAAABJRU5ErkJggg=='
            }}
              style={{
                width: 54,
                height: 42,
              }} />
            <Text style={styles.text}>
              {intl.getText('t30')}
            </Text>
          </View>
          <View style={styles.box1}>
            <Image source={{
              uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAE4AAAA/CAYAAABO1P55AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDE0IDc5LjE1Njc5NywgMjAxNC8wOC8yMC0wOTo1MzowMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphYmMxMWQ0Ni01YmIyLTRhMmUtYWFjMS1kZWE5MWMyNGIyNjkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDNBMzc0REE5N0VCMTFFNDgwMTFCQTJCOTU1OTk2RjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM5N0NGRkU5N0VCMTFFNDgwMTFCQTJCOTU1OTk2RjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZWQwNjc5ZS01ZGU0LTRiNDMtOGI1Ni0xYjY0NzMzYzRhYzEiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1NTY0YmI2NS1iMDZkLTExNzctODRjYS05MGJjNzMyYTExZjAiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4dwsPWAAAE/klEQVR42uyceWhUVxTGbybiFkkUElusIEhoRVEbEKVqKS6j0W7uFQSpERXTiqbLFCmVFsQ/nhuKS1FpG1KD4gJuSQ1RcWsNilFj2tBGUWxpMaUSjKMtlfE7vjMqz/PeLA7OfZl74GMy78y8efnl3XvPcidZkUhE6W6hUCjZt3aEvoamQ81QCVSf6Eksy3rqWEC1b1sEzYG6Qa9Cx6AhqThxewc32PE8D6qBigw4bzsuHOvB8AYZcO72DVQhHM+HaqEBBpxsEZ7jdgq+Aob3igEn231oFrRb8L0IHYEKDThvePsE30u82vY14GT7D5oBVQm+3tBRqI8B5w5vCnRY8PVheL0NONn+ZXi1gq8vD9teBpxsYehdlzivkBeMFww4d3hvQqcEXz+GV2DAyXYHegs6I/gG8HDON+Bka4WKoXOCj9KymlAo1MOAc4c3TsklpyKGl2fAyXaL4V0SfFSKqga83OiBLN0KmXxxn/AEnQ6jOW2Ui48WkgmWZbXpCO40HoZrfGf+CAW1AgdotPzf9MGwPqTbHNfKIYLuadsmrcBh7qCL+hC6qzG02bjOqiwdu1wYsl3x8DKUnYaPL1V2N8xp/0MzAW1P3KtqnO25ntDHyi4Obld2Xd9vNl/Z7cQsx/GH9TxAe1RJ7pCiDyRoJ9TjMjQVDV+HfvIRtBIPaHOehJaqAFiq3dMQm+QjaLOhLQI0Go7zAK0i1SlXd2UXBQcKvms+gfaesrth2QI0GrrfpjrJz2NoUnO3Dir3AbRpPB9L0Gh13+b2xmTB5VAQCA0VfBcoLVF2vUtnm+wCjayMYjWvNycDjkKFA9AIwdfIifItzaFRAXOHsjflOI0ig3WxTpAoOPqgvS5J8K/QWKhFc2jF/DtI0D6H1sRzkkCC0Cj4Gy/4rkBjoL80hzbWA9qX0Ip4TxQvOJoHKpVdZnbaDYb2u+bQ3lB2Q7qL4FsOfZXIyWKCQ9ZA0L6HpgruP6DR0HXNoY3kxayrlCJDXyR6wkAMaBQQbqUcTXDf5Fu/WXNorzG0HMG3FvosmZMGYkDbrOzdPk5rYWhNmkOjKnI1lCv41vMKqlIKjv8aC4TjrbxANPggwP2AA3WnUU66hAPd1IHD3UbjfrEHtHrlD+smHKP0qvRZoIngAI1Wl0+F14Z5Va3zUfJOd9a9J55/x/nnMxchOzigLcXDMg9op5S/rI5z6fG88u9LBTSyR4VMQCvziJpXQz+k6Ze/bFmWdoH1Q3CA9hF+XqWerkfpYG2UkANerU4XlR0Oh+ficYOm0KKpXv9gMLhVp4sKcOSvK7SoFeh2QQTufWi/5uC26TrHdeKqwUSX1x3ivPR5G7XkaMtBJea4iHbgeFXtzHdeUHhdE1cX0rI9Qfr2ng5DNXpxFChSZ+q4S85Xq+Nck3ZwDI8C3beV3A+lThY1Z7obbELKBXi3ld1skbZ2FnEgnGfAyXNKNJm/KLiHQQeVXBTMbHAM7x9eKBoF98hMhxeIsZq1MLzfBPco5d74yGxwDO9Pzi6uCm4azrsyEV68XS7qYFEn64bge0e5d8QzHhzZNb7zpAyC9mCUZxK8RDv5zTznSd162hO3xQcFg7SAI/uFh+3fgo82523MBHjJ7lZq4IWhVfAtVHbF2IBzsfMe8Mo4+zDgXKyOc9uwS5xnwHnYSQ5JnPDOGnCxjb5NTJv1flb2psKVSv4/H+3GHggwAJiQN1kupu2WAAAAAElFTkSuQmCC'
            }}
              style={{
                width: 52,
                height: 42,
              }} />
            <Text style={styles.text}>
              {intl.getText('t31')}
            </Text>
          </View>
        </I18nView>
      </View>
    );
  }
}

// <View style={styles.textbox}>
//   <Text style={styles.text1}>{intl.getText('t32')}</Text>
//   <Text style={styles.text2}>{intl.getText('t33')}</Text>
//   <Text style={styles.text3}>{intl.getText('t34')}</Text>
// </View>

let styles = {
  appHeader: {
    backgroundColor: '#fcfbf1',
    height: 62 * 2,
    borderTopWidth: 1,
    borderTopColor: '#e8e8e8',
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
  },
  box1: {
    flex: 1,
    height: 62 * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 1,
    height: 62 * 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#e8e8e8',
    borderRightWidth: 1,
    borderRightColor: '#e8e8e8',
  },
  text: {
    color: '#757575',
    fontSize: 22,
  },
  textbox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 76 * 2,
  },
  text1: {
    color: '#707070',
    fontSize: 22,
  },
  text2: {
    color: '#44b1c3',
    fontSize: 22,
  },
  text3: {
    color: '#999999',
    fontSize: 22,
  },
};

export default App;