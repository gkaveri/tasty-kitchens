import {Component} from 'react'
import {FaPinterestSquare} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'
import './index.css'

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="restaurant-name">
          <img
            src="data:image/webp;base64,UklGRvAKAABXRUJQVlA4WAoAAAAQAAAArwAAjgAAQUxQSB8CAAABJyAQSOFmFxERg+zatuI4uiAFQMsKgJYJgPIigOnln5RL8AS3x6+I/k8A/t+8ruvgc1W5/TyIuC/pT8eQu441LhkPpsd9yfdwTOeqaCZz95L7YObyTXSTeVel287kRT2Zb1UG7TxeHgwAqgybWZw8uuEl42kS156RH6J5zlFlRTPDS5YMEzhZdHuurpIei7Kseaqtcz4UZeGH2krbI1FWPh9pS8kTUda2D9TFdj0niwe9vJroteWslpPld628XtBq6yUlJwSVIgOjUxhYncZgU3HCcFfxtDKtSuFUaRSCirBytPxvV+aw/80oHKxGpZU5GI3KAeO+CcU09hKSYeglLPcRLzS3ASc8zUDlkdAfhec50IhsfVGImr5GJKHbC9G9rzAxfUI0oTsy2foKkYT+RmTrc8IzoT8S2QYyjxODlUbCqLBMhlTAsCcRQGqHYuaw0bK0wCqpVAqB1v7btdGyfwT5r0Gk5Wk5WuDVaBUGm05msOt4WmgEglIhkJQiAVECA6tUCOxKjsCphLqeaDkCVgllvVPLKZ1tok0LUSWZONGphqJhgDaP6KGOWQD5qevCe38ZPXyNWABwj4QDs/7sCgZvi16wmPm6CQduo1Y6MLu/rutCt9InCBaVAwyjQjKg6MaCAck6EkAzDwTw9H0fYNp1gmrrCOBa7gLI5psEtv5dMnTcOwu+bzYQriLyAcZFJIBylmQ4ebHg7D7w/zIAVlA4IKoIAADwKgCdASqwAI8APt1kqk+opaOiKxJrMRAbiWYIc5GMnlnBfJz9h56Nt/039c4jM99tX/Q+pvba+Y79svWh9Jf+t9QD/gdSdvLX9w/8eUheRP8l3A469nb2Hyp4jnIg/GGAQ8b3m33J4ZNFcRY9WiA8KbYXYBodqonrEOf0oTsTqK2Q7zPbKENmUnAx+jZE6lfs0kNpru7a5A1KZ1ayEKnUReg5+TiGFvHddjCORcemqSl9Ndu4Le+WgW9mrHLp06TC7b00KSOapmB4EW4UUlQ3rc1DwUo+qyA5MDSk0rjMeredtjlH/IHquVD0mITwc18UbzFsxKSM6Ey0deVC7lS2kP//HXV7/4W8WD+Id1+V2Bhn6sWjAnwufauPwC0vxHyk0aL9strSvFBP0mQHK+uT30LLwP/TtXS6OMBzklnr46+Ppq3r/lGcR6uTA0W0HfMZQDfgJ605H3SyqaAIopQAAP6iWhRdENf3ugAg5j4Z0+qMKmDnHV0lxf33oeCYu2p08l15Vd5+LB8xxIZ2NT9fB3w5ela+CiMBWB1cCpAssiw+erglLC2DdfhGg/qYM1a+x9ogVwDjCjb44tafMA6AoAeXzHFNIUZaF2ncOB7ad8F4YFVhsAIassLpSgseGerPfl89f/slcWONPvOcO1K1MrOza54tU2azyUz7pH9ZKZ+uzdrdP710w2aCHiRxgn2tHojbqXGpWVPhfbTnip6qKXZxQttWBa/a3EPyvqR+jyu2oTS5jfUkN6/ltnu1on6yVoZI3to6+m3bgFjMgqbRhYqsS2VBdKeIBOm427Kn8kVNREU6Zpq/G0HrQ+Gv61ymOl0sEGlftJLBXXkMztSxILPvsgt8fjcilVPjnMczdDh8d2zKVmPUpFbfNCdOTM8SnwE3rAGEgYqXnhM0Ms3XhRse45ZIQbNwUVpnOHV6uko8ySM0qLoDhW4nBpz8v+O/R3LxtXyf+rJdPDJJIqpbikX7bl8hJNMWfqrA1H4Brssg2/zrLG1kKfUwNAtjVtDTMnCM2jY/8w+87hduhipVAuF0hRdNkXf2KBBwZFfJnnve9HHMMYu3YWziVMKuQavdsAS2bhIcyNfwTOZ+vDoV3XjEty2pA9sF1ZVDkicCUQhfGTKeO62q5MbbYjQePrLPbwKwAHbh3/bGMv5J5qFo00M8Xi8tevmusEFUswAoBcChHEu69gWjS8o01N67w3JrkJPc4SkdWfRjRL01nqfRWy3wIAAmoHepDl8PpY8bT5DRBbT7pw43G2r12AtoGk45hH+cLln+JNHgqoJvuabGRGJtMM84HS9UL/YCp+dN+CYLYo7XwiXvWsYdAFSuPGUEJFdToyg4LtDsbWLPnBnn+HJC/pNTQ97YL8PuEehO9YiG576xHkGIF3/uMeCa8opico/wk4OvlppAQa2ww7j15nDBZ8/tsPj1L6IMer7vWBlNwWB4DBwxXHiBON/Mms0vJpLHMq7DqIVM+euTtyD2WrLWas2RgjFOgkcGjo+0x+P5gBExD/GJl5lRwIw1htidOkwQYFxG35pvlYK1cZpCJj3KMG5R/LS2zIPHhX/aa8pzkAMma20g7QhEJWPgeNr3TEKvMzWUVv9n5xQDKU2r9CjK/QDymJDrh5CLO9fVgVyl6Qv2+t02OysmSLklaQpY+NHZyn90hGmfpTupELrhPaygVs2Y9wgG9ujZOvwJ0aJJh64C4xmgw0OsK2M0CbFoHamQL1+cwyQvZ7Q0+DyBBav15E5asuz7kx74t7GRLUMqr+w3lgrTs88AEEhgcfn1n0EL+oMmIufHCXjIAjlz+U3bMspuw9YPxXiqmvsnkprDfu5AKFz5xKTRqtJYTKw8xAEAjF9CVydmWFYa0V+khmLzu49eXtj4GU9VyrvwgujWaw+FRjw291HR3McT/B7DGRCwQ7rB6uksm1mcLjFi/40rs/9NMlroNzz5J8kXWsMd8Qff2J3pSQvPh7ICu3t+0o1Ut8N94KGQ7okivtZ9kTzPlxFwFDZekfKxrfCQ3tqCm3GmRzwOWrP5ElyFHH/aOfLuPBWaywIxPg649K6WMPN3yOctdErd9TEXlytGsSoDZfdUnWPsUbv4XZUgdxoy8VvY4ddRw7L2nTP5OG7DwhejvK9qzar+5CU5EQz3BjIRpM8c1wUXw1CR3OmR90js8PaQrAyVeyTNZVSfbkvrqJ7bV78ZDLQJfCokUZEAYqyCA2Jgk1oF4EwLumpYkeDd41NsSWXLNRZKmW69ZpA7tZaa2yp2ALAGhlhqLNhP6/gmDIhnhp3n2E6CPPtfQMGIISoBItBr+xrw5vnAf51bff1TxK//q6HOSuJTHqYmKOoIaS+dbIw1W642tGpi5KtoOLiZKbwoLCnpxDsI77cqSH76DC5hp3im0+/p0PEDHAoU5SuCjafLCQ8sFdxSM0AH8JLq0K1yU1ZaaDbFFUwjnVS7DVy+4EreRwphTHdpqlAHSuzQxcKof3CCrF6Ss8jGQQdbsPGb2dbqc8MyljhRxhp59h5WzUDOS2pzNnHg3cES33HoXalO5cXXRC9yvjPEYxD/U+V9Wf2OfJkMyjzg0kagSYQ9r9DO8mS5HabBS0j+CVjhua6YTl8HBzQF+VC5P7fZUGe08UrLGcdfrfpUa1cnDA7ygmicYK5krRfPrYi7P7V48orCZioJmFZ8XINttnc/cKvwCKTXdq3ZnJbBerIUdneQ32YFvbqzDh/Nj/nUfrm8/stMp7upZ9R8oNDuIQGFMGFDK5hy/u0DVqi3BoH9+98F18aDP9Lng8vpSNrjctzmjPnntmW7LUkL2lqlCdp07AqL2U0mago50h71RDlhY4UjInRqaBWG+UkmWWncXIFCQB3g3l/CfLcBJsZkDp3/h/inep+FGOAwBuHP3bJ2aO1wFwHQs//Nf7BGrBh8bVraDhi3bMxsJazp+dYnOE+RtwsUAAAA"
            alt="website-footer-logo"
            className="website-logo"
          />
          <h1 className="website-heading">Tasty Kitchen</h1>
        </div>
        <p className="website-descripiton">
          The only thing we are serious about is food. Contact us on
        </p>
        <div className="icons-container">
          <FaPinterestSquare
            testid="pintrest-social-icon"
            className="icon-font"
          />
          <FaInstagram testid="instagram-social-icon" className="icon-font" />
          <FaTwitter testid="twitter-social-icon" className="icon-font" />
          <FaFacebookSquare
            testid="facebook-social-icon"
            className="icon-font"
          />
        </div>
      </div>
    )
  }
}
export default Footer
