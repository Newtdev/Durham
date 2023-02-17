import "./style.css";
const Pdf = () => {
	return (
		<div>
			<div id="sidebar" style={{ background: "red" }}>
				<div id="outline"></div>
			</div>
			<div id="page-container">
				<div id="pf1" class="pf w0 h0" data-page-no="1">
					<div class="pc pc1 w0 h0">
						<img
							class="bi x0 y0 w1 h1"
							alt=""
							src="data:image/png;base64,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VoZlFEUhhGHDhr322mv/6LYOHjw4e/bsZs2aLV26tOrN5efnv/baax06dFi5cuW3336bvvC55577/fffH3/88aphmf7ZZs2adfr06Wefffact7hz584oivr06VMZk3l5eXfddZd1B9CWAMD51KpVq4suuuibb77ZunXrGa/wzjvvRFH06KOPZn5bH3300bFjx+69996WLVtW+1J+fn76vNnKvdB33303iqKxY8fW/D733XdfKpVavXr16dOnz36L6TNsly1bdujQIWsNoC0BgAvl4osvnjBhwokTJ/r16zd37txTp05V/erhw4e3bdvWrFmz66677pzf6tixY2X/qdobAm3ZsiWKom7dup3xn1999dVRFH333XdRFB06dGjXrl2tWrVq3759zWs2bdq0Xbt2ZWVlu3fvPvuP1L9//549e27btq1Xr17/4gxeALQlAPB3zZw5c9y4cYcOHXr44Yevuuqql19+ufKzOvbv3x/Hcbt27f7O97nlllsK/tPTTz9d9QolJSXRX3uJNaUvP3jwYBRFBw4cOMs1q135LBo0aPD+++/fcsst27ZtGzRoUFFRkcIESCTv5QMAda9hw4YvvfTS6NGjp02b9sknn4wbN27hwoUffvhhs2bN0p8ykkr9rV/ZI0eObNOmTdVLNm7cuGnTpsr/TSdrgwYNzvjP8/LyKr969mtWu/LZXXbZZevWrVuyZMnMmTM3b948aNCg8ePHP//889YdQFsCAOdfUVHRihUrNm7cOHr06C+++GLixInz5s279NJLoyj67bff/s53mDRpUs3PIKnals2aNYv+2r2sae/evVEUpd9D6OzXrHblcwohDB8+fNiwYfPnzx87duwLL7zQo0ePBx54wKIDJIZzYgEgu/Ts2XPVqlUNGjRYsGBBHMcdOnQoKCjYt29fuuUylP5ckx07dpzxq+lXWqZfjdm2bdsmTZqUlJQcOXKk5jVLS0t/+eWX1q1bn+Wk2TMW5v333//KK69Ef71BEQDaEgC4UK644oomTZqcOnXq9OnTeXl5t99+exRFr776aubf+dZbb42iaOnSpZWv56x0/PjxBQsW5OXl3X333ekO7NevX0VFRfrdYqt58803y8vLhw4d+i9+hvQ7Bp04ccJCA2hLAOC82bRp01dffVX1kjVr1hw+fPiGG25Iv5pxypQpeXl5zzzzzOrVq6tebcuWLZMmTfpHt9W9e/c+ffr8+OOPU6ZMieO48vKTJ0+OGTNm7969o0eP7tChQ/rCCRMmRFH05JNPbt++veo32bhx41NPPdWoUaPJkyef8xaLi4t/+umnqpe89957URQVFRVZeoAk8XpLAKhjX3755WOPPXbzzTcPGDCgTZs233///bx581KpVOVbvBYVFc2aNWvKlCkDBw4cNGhQjx49/vzzzy1btqxdu7ZXr17/9ObmzZvXt2/fOXPmrF+/fujQoa1atdq7d++SJUt27Nhx4403zpkzp/KaAwYMmDhx4pw5c7p37z5ixIiuXbtWVFR8/fXXxcXFp0+ffv311zt37lz1O584caLqh2GGEJ544ok33nhj5MiRgwcPLioqaty48eeff15cXFxYWPh3uhSA+iSGXOKwB7LwMefgwYPjxo1r3rx55W/n66+//rPPPqt2tQ8++ODGG28MIaSvU1hYOHHixAMHDqS/OmrUqCiKtm7dWu1fzZw5M4qi4uLiqhfu2bNn9OjRBQUFlbfYrl27qVOnHj16tOaP9/bbb1977bX//2fpVGrAgAEbNmyodrXevXvXfJrx+eeff/fdd0OGDMnPz09f0qBBg7vvvnvnzp0OD4CECVXPh4HESz8nc9gDWfiYU1FRsXv37tLS0rZt27Zu3fq/Xa20tLSkpKRp06Zt2rSp7Mz0Pz9+/Pgll1xS84/IZWVlVTOy0qlTp/bs2VNWVtayZctzfn7mH3/8sW/fvoYNG7Zv377mrZzTsWPHfv755/Ly8o4dOzZp0sSxAZDA33qeZON5HoDHHADIkPfyAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAAdSllBOSgEIIhAB7HAMhCcRzX05/cviUAAACZsm9Jbqm/fwcC8JgGkGz1/ZwU+5YAAABoSwAAALQlAAAA9Z3XW5K9vAsikBheGAlA4tm3BAAAIFP2Lcl2/tgP1GtOwQAgR9i3BAAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAAuSllBABQT4UQDAGALGHfEgAAgEzZtwSA+ieOY0MAIKvYtwQAAEBbAgAAoC0BAACo77zekmznXRABACD72bcEAAAgU8EbzQEAAJAh+5YAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAAD1TcoIslMIwRAAACAx4jjWljj4uCBCCFbZegF4ZDN2cmTdE7/0zokFAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAQC5KGUE2CyEYAgAAoC3JSBzHhpBg/nYAAEBiOCcWDQYAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAKAuhDiOTSEbFyYEQwAAgMRIfHmlrLGDr16UdiKnkdT75TgE8MiGsVNz3RO/9M6JBQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAC0JQAAAHUhxHFsCtm4MCEYAgAAJEMuZFfKMjv+6kVpJ3IaSb1fjkMAj2wYOzXXPfHP8J0TCwAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAAOpCiOPYFLJxYUIwBAAASIZcyK6UZXb81YvSTuQ0knq/HIcAHtkwdmque+Kf4TsnFgAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAANSFEMexKWTjwoRgCAAAkAy5kF0py+z4qxelnchpJPV+OQ4BPLJh7NRc98Q/w3dOLAAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAAKgLIY5jU8jGhQnBEAAAIEmSHV8pC+zIqxelnchpJPV+OQ4BPLJh7NRc98TfR+fEAgAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAAD/Rojj2BSycWFCMAQAAEiGXMiulGV2/NWL0k7kNJJ6vxyHAB7ZMHZqrnvin+E7JxYAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAADUhRDHsSlk48KEYAgAAJAMuZBdKcvs+KsXpZ3IaST1fjkOATyyYezUXPfEP8N3TiwAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAACoCyGOY1PIxoUJwRAAACAZciG7UpbZ8VcvSjuR00jq/XIcAnhkw9ipue6Jf4bvnFgAAAC0JQAAANoSAAAAbQkAAIC2BAAAAG0JAACAtgQAAEBbAgAAoC0BAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtAQAAQFsCAABQF0Icx6aQjQsTgiEAAEAy5EJ2pSyz469elHYip5HU++U4BPDIhrFTc90T/wzfObEAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAwL8R4jg2hWxcmBAMAQAAkiEXsitlmR1/9aK0EzmNpN4vxyGARzaMnZrrnvhn+M6JBQAAQFsCAACgLQEAANCWAAAAaEsAAADQlgAAAGhLAAAAtCUAAADaEgAAALQlAAAA2hIAAABtCQAAgLYEAAAAbQkAAIC2BAAAQFsCAACgLQEAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAAAA2hIAAAD+jRDHsSlk48KEsPTTTeYAALXmfwYW5eDzDU8FjZ1aW/coipK99CnLDABQ+czPvcbYuUAKCwuTfQe1JQDA/7GbBFw4if+bgtdbAgAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAsD/tne/sVHUeQCHf1NaKRSlLYUK1BxNQ3MK2lxMyL0g0cMQk8upnHrEtJo2mohp4p8XcsFcPM++MMazvOCNb9TwDtOkL0gMSo4QYlASjYQASQMmVOGoVGvLUpbdtu7Ovdik12uLlfagu9vnecd0lobvTJjfpzMMAADaEgAAADku6BcAABH4SURBVG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAACgLQEAANCWAAAAaEsAAAC0JQAAAGhLAAAAtCUAAADaEgAAAG0JAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYAAABoSwAAALQlAAAAaEsAAAC0JQAAANoSAAAAbQkAAADaEgAAAG0JAACAtgQAAEBbAgAAgLYEAABAWwIAAKAtAQAA0JYAAABoSwAAANCWAAAAaEsAAAC0JQAAANoSAAAAtCUAAADaEgAAAG0JAACAtgQAAABtCQAAgLYEAABAWwIAAKAtyTNxHBsCAACgLQEAAFgoIvfHAABCCFFkXQT4S2b23LcEAABgrkqNIA9FUWQIAABAAXHfEgAAgLly3zJP+fceAHAreWgIYI7ctwQAAEBbAgAAoC0BAADQlgAAAGhLAAAA0JYAAABoSwAAALQlAADMk+PHjz/xxBPmAPOu1AgAAChcZ86cSaVSkzaOjIz09PSUlZXdc889URRN+8Gp+4yNjSUSiYn7LFq0qKqqKoSQTCbHv0sURdXV1df7bWHBct8SAICCdPjw4aamppaWlk8++aSxsfHYsWO57QcPHqyrq3v44Yc3bdq0YcOG3t7eqZ+ddp/33ntv5f+qrq4eGBgIITQ0NIxvrKmp+fzzz80ftCUAAAVvcHBw27ZtjzzyyODg4ODgYEdHRzqdDiH89NNP27dv37FjR39///fff79s2bIdO3ZM+uz19mlvb/9xgvb29vXr19fU1IQQ0un0xx9/nNs+MDCwefNmhwAm8UwsAACF5+zZs8PDw21tbZWVlSGEp556Kre9u7s7m82+8cYbIYQ77rjjlVdeefrpp4eGhnKPts64T64kQwjJZHLfvn0dHR3jn1q+fPn4V4Gp3LcEAKDwrF+/vry8/M0337x69erE7T09PU1NTWVlZblf3nfffXEcnz179kb3+fDDD7PZbFtb2/iWH3744cKFC5lMxvBBWwIAUCRWrFixb9++AwcO1NXVPf/88ydOnBgvwNydzJzc7crLly9P/OyM+2Sz2T179jz77LPLli3LbVm6dGlbW1tDQ0N5eXlra+vw8LBDANoSAIBisG3btvPnz3d2dh4/fvz+++//4IMPQgijo6MT3+BaUlISQliyZMnED864z/79+8+dO/fiiy+Ob+nr67ty5Uo6nf7000/379+/a9cu8wdtCQBAkaioqHjuuee++uqrxx577PXXXw8hVFVVDQ0Nje+Qe8vrqlWrJn5qxn1279796KOP1tfXT146l5Q89NBDzc3Nhw4dMnzQlgAAFJUoijZv3pxMJuM43rBhw6lTp8bGxnJf+vLLL2tqahoaGibu/8v7fP3110ePHn355Zev9+2Gh4cn3QgFtCUAAAVp7969r7322rFjx86cOdPd3f3uu+82NzdHUfT444+n0+ncf0nyzTffvPXWW88880xZWVk2m33yySc/+uijEML19sn9zp2dnU1NTQ8++OD49zp69OjBgwfT6fTIyEhXV1dXV1d7e7tDAJNEcRybQt4dlchxAYBbffENIbj+FpBTp07t3Lnziy++uHbtWmNjY3Nz886dOxcvXhxC6OrqeuGFFxKJRC4j9+7dW1FRMTIyUlVV9dJLL7399tvX2yeE0N/fX1dX9/7777e2to5/r0OHDrW2tvb19UVRVF1dvWvXrldffdUhwCJfWzrtAABtWSQ6Ozu/++67PXv2TNo+NjZ28eLFysrKie+DTaVSixcvzr2553r75Hab9pHXixcvlpSUrF692tixyJ9WqWMMAECByt20nLq9rKxs3bp1kzZOKsZp95m627i1a9caOPxSPPv5XD4eFfctAeCWX3yD+5aARf4ceJcPAAAA2hIAAABtCQAAgLYEAABAWwIAAIC2BAAAQFsCAACgLQEAANCWAAAAoC0BAADQlgAAAGhLAAAAtCUAAABoSwAAALQlAAAA2hIAAABtCQAAANoSAAAAbQkAAIC2BAAAQFsCAACAtgQAAEBbAgAAoC0BAADQlgAAAKAtAQAA0JYA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"
						/>
						<div class="t m0 x1 h2 y1 ff1 fs0 fc0 sc0 ls9 ws0">
							DATE:<span class="lsa wsb"></span>
						</div>
						<div class="t m0 x1 h2 y2 ff1 fs0 fc0 sc0 ls9 ws0">
							BUDGET<span class="wsc"> C</span>OD<span class="_ _0"></span>E:
							<span class="lsa wsd"></span>
						</div>
						<div class="t m0 x1 h2 y3 ff1 fs0 fc0 sc0 lsb ws1">
							COMMODITY
							<span class="lsa wse">
								<span class="ls0 ws2">CODE:</span>
								<span class="wsf"> </span>
							</span>
						</div>
						<div class="t m0 x1 h3 y4 ff1 fs0 fc0 sc0 ls9 ws0">
							BEST
							<span class="lsa ws10">
								<span class="lsb ws1">
									PRICE(A<span class="_ _0"></span>TTACHED):
								</span>
								<span class="ws11">
									{" "}
									<span class="ff2">☐</span>
								</span>
							</span>
						</div>
						<div class="t m0 x2 h4 y5 ff3 fs1 fc0 sc0 ls9 ws3">
							DUR
							<span class="v0">
								HAM
								<span class="lsa ws14">
									<span class="lsc">PUBLIC</span>
									<span class="ws16">
										<span class="lsd ws17">SCHOOLS </span>
									</span>
								</span>
							</span>
						</div>
						<div class="t m0 x3 h5 y6 ff3 fs2 fc0 sc0 lsd ws17">
							REQUISITION
						</div>
						<div class="t m0 x4 h3 y7 ff1 fs0 fc0 sc0 lsa ws12">
							FRANCHISE/SOLE
							<span class="lse ws4">
								SOURCE(ATTACHED<span class="_ _0"></span>):
							</span>
							<span class="ff2">☐</span>
						</div>
						<div class="t m0 x1 h2 y8 ff1 fs0 fc0 sc0 lse ws4">
							NAME:<span class="lsa ws12"> </span>
						</div>
						<div class="t m0 x1 h2 y9 ff1 fs0 fc0 sc0 lse ws4">
							ADDRESS:<span class="_ _0"></span>
							<span class="lsa ws12"> </span>
						</div>
						<div class="t m0 x1 h2 ya ff1 fs0 fc0 sc0 lsf ws5">
							ATTN:<span class="lsa ws12"> </span>
						</div>
						<div class="t m0 x5 h2 yb ff1 fs0 fc0 sc0 lsa ws18">
							SHIP <span class="ls1">T</span>O: DURHAM
							<span class="ls2">P</span>UBLIC
						</div>
						<div class="t m0 x5 h2 yc ff1 fs0 fc0 sc0 lsa ws6">
							<span class="fc1 sc0">SC</span>
							<span class="fc1 sc0">HO</span>
							<span class="fc1 sc0">O</span>
							<span class="fc1 sc0">L</span>
							<span class="ws1b">
								<span class="fc1 sc0">S </span>
								<span class="lsb ws1">SCHOOL/DEPT.</span>
								<span class="ws1c">
									<span class="ls9 ws0">
										NA<span class="_ _0"></span>ME:
									</span>
									<span class="ws1d"> </span>
								</span>
							</span>
						</div>
						<div class="c x6 yd w2 h6">
							<div class="t m0 x7 h2 ye ff1 fs0 fc0 sc0 lse ws4">
								ORDERED<span class="lsa ws12"> </span>
							</div>
							<div class="t m0 x8 h2 yf ff1 fs0 fc0 sc0 lsf ws5">
								QTY
								<span class="ls3 ws12">
									<span class="lse ws4">U/M</span>
									<span class="lsa"> </span>
								</span>
							</div>
						</div>
						<div class="c x9 yd w3 h6">
							<div class="t m0 xa h2 y10 ff1 fs0 fc0 sc0 lsf ws5">
								STOCK<span class="lsa ws12"> </span>
							</div>
						</div>
						<div class="t m0 xb h2 y11 ff1 fs0 fc0 sc0 ls10 ws7">
							NUMBER<span class="_ _0"></span>
							<span class="lsa ws12"> </span>
						</div>
						<div class="c xc yd w4 h6">
							<div class="t m0 xd h2 y10 ff1 fs0 fc0 sc0 lsf ws5">
								DESCRIPTION<span class="lsa ws12"> </span>
							</div>
						</div>
						<div class="c xe yd w5 h6">
							<div class="t m0 x7 h2 y10 ff1 fs0 fc0 sc0 lsf ws5">
								UNIT<span class="lsa ws12"> </span>
							</div>
						</div>
						<div class="t m0 xf h2 y11 ff1 fs0 fc0 sc0 lse ws4">
							PRICE<span class="lsa ws12"> </span>
						</div>
						<div class="t m0 x10 h2 y12 ff1 fs0 fc0 sc0 ls11">TOTAL</div>
						<div class="t m0 x11 h2 y11 ff1 fs0 fc0 sc0 lsb ws1f">COST</div>
						<div class="t m0 x12 h7 y13 ff4 fs3 fc0 sc0 ls12">
							S
							<span class="ff1">
								UB
								<span class="lsa">
									-T<span class="ls13 ws21">OTAL </span>
								</span>
							</span>
						</div>
						<div class="t m0 x13 h7 y14 ff1 fs3 fc0 sc0 ls14 ws8">
							SHIPPING<span class="ff5 ws22"> </span>
						</div>
						<div class="t m0 x14 h8 y15 ff1 fs3 fc0 sc0 ls15 ws9">
							(IF<span class="lsa ws12"> APPLICABLE) </span>
						</div>
						<div class="t m0 x15 h7 y16 ff6 fs3 fc0 sc0 ls4 ws12">
							If applicable enter, <span class="ff1 ws23">NC </span>
						</div>
						<div class="t m0 x16 h8 y17 ff1 fs3 fc0 sc0 ls4">
							SALES
							<span class="lsa ws24">
								<span class="ls13">TAX</span>
								<span class="ws25"> </span>
							</span>
							<span class="ff6 fs4 ls16 ws12">
								@ <span class="fc1 sc0">$0.075</span>
							</span>
							<span class="fs4 lsa ws26">
								<span class="fc1 sc0"> </span>
							</span>
						</div>
						<div class="t m0 x17 h2 y18 ff1 fs0 fc0 sc0 lse ws4">
							PURCHASING<span class="_ _0"></span>
							<span class="lsa ws12"> </span>DEPT.
							<span class="lsa ws12"> </span>
						</div>
						<div class="t m0 x18 h2 y19 ff1 fs0 fc0 sc0 lsf ws5">
							DATE<span class="lsa ws12"> </span>
						</div>
						<div class="t m0 x1 h2 y1a ff1 fs0 fc0 sc0 ls9 ws0">
							VENDOR
							<span class="lsa ws27">
								{" "}
								<span class="lsb">#:</span>
							</span>
						</div>
						<div class="t m0 x5 h2 y1b ff1 fs0 fc0 sc0 lsb ws1">
							SHIPPING<span class="lsa ws28"> </span>#:
						</div>
						<div class="t m0 x19 h9 y1c ff1 fs0 fc0 sc0 lsa ws6">
							Requisition<span class="ff7 ws12">/Work Order</span>
							<span class="ws29">
								{" "}
								<span class="lsb">#:</span>
							</span>
						</div>
						<div class="c x1a y1d w6 ha">
							<div class="t m0 x1b h2 y1e ff1 fs0 fc0 sc0 lsf ws5">
								P.O.<span class="lsa ws12"> </span>#:
								<span class="lsa ws12"></span>
							</div>
						</div>
						<div class="t m0 x1c h9 y1f ff8 fs0 fc0 sc0 ls9 ws12">
							Business
							<span class="ff6 ws0">
								Manager:<span class="ff1 ws2a"> </span>
							</span>
						</div>
						<div class="t m0 x1d h2 y20 ff1 fs0 fc0 sc0 ls0 ws18">Date</div>
						<div class="t m0 x1c h9 y21 ff6 fs0 fc0 sc0 lsa ws12">
							Director
							<span class="ff8">
								of C
								<span class="ls0 ws18">
									onstruction and Sustainability <span class="ff1"> </span>
								</span>
							</span>
						</div>
						<div class="t m0 x1c hb y22 ff9 fs0 fc0 sc0 lsa ws12">
							Executive
							<span class="ff6">
								Director Building Services<span class="_ _1"> </span>
								<span class="ff1 ls0 ws18 v1">Date </span>
							</span>
						</div>
						<div class="t m0 x1c hc y23 ff6 fs0 fc0 sc0 lsa ws12">
							Deputy Superintendent Operational Services:
							<span class="ff1 ls5 ws20">
								<span class="ls0 ws18 v2">Date </span>
							</span>
						</div>
						<div class="t m0 x1e hd y24 ffa fs1 fc0 sc0 ls6 ws12">
							GRAND TOTAL
						</div>
						<div class="t m0 x1c h9 y25 ffb fs0 fc0 sc0 ls9 ws12">
							Project Manager:<span class="ff1 ws2b"> </span>
						</div>
						<div class="t m0 x1f h2 y26 ff1 fs0 fc0 sc0 ls0 ws18">Date</div>
						<div class="t m0 x20 he y27 ff1 fs5 fc0 sc0 ls7">
							I
							<span class="ffc ws2c">
								have <span class="wsa">veri</span>fied that
								<span class="ws23">
									the <span class="ls8">i</span>
								</span>
								tems requested above have
								<span class="ws23">
									been <span class="ws12">selected </span>
								</span>
							</span>
						</div>
						<div class="t m0 x20 he y28 ffc fs5 fc0 sc0 ls7 ws2c">
							from <span class="ws23">the </span>appropriate sources
							<span class="ws23">and </span>that
							<span class="wsa">
								appropri<span class="ws23">ate </span>
							</span>
							funds
							<span class="ws12">have </span>
						</div>
						<div class="t m0 x20 he y29 ff7 fs5 fc0 sc0 ls7 ws12">
							been authorized to cover the cost of the items.
						</div>
						<div class="c x1 y2a w7 hf">
							<div class="t m0 x0 h10 y2b ffd fs6 fc0 sc0 lsa ws12">
								Rev: <span class="ffe">4</span>/
								<span class="fff">
									2<span class="ffe">2</span>
								</span>
								/2022
								<span class="ff10">
									{" "}
									- <span class="ff11">FM</span>
								</span>
							</div>
						</div>
						<div class="t m0 x21 h2 y2c ff1 fs0 fc0 sc0 ls0 ws18">Date</div>
						<div class="c x22 y2d w8 h11">
							<div class="t m0 x23 h12 y2e ff12 fs7 fc0 sc0 lsa">jskldlnsk</div>
						</div>
						<div class="c x19 y2f w9 h13">
							<div class="t m0 x24 h14 y30 ff12 fs8 fc0 sc0 lsa">F4</div>
						</div>
						<div class="c x25 y31 wa h15">
							<div class="t m0 x9 h16 y32 ff12 fs9 fc0 sc0 lsa">F2</div>
						</div>
						<div class="c x19 y33 wb h17">
							<div class="t m0 x26 h18 y34 ff12 fsa fc0 sc0 lsa">F5</div>
						</div>
						<div class="c x27 y35 wc h19">
							<div class="t m0 x28 h1a y36 ff12 fsb fc0 sc0 lsa ws12">F3</div>
						</div>
						<div class="c x29 y37 wd h1b">
							<div class="t m0 x2a h1c y38 ff12 fsc fc0 sc0 lsa">F10</div>
						</div>
						<div class="c x2b y39 we h1d">
							<div class="t m0 x2a h1e y3a ff12 fsd fc0 sc0 lsa ws12">F6</div>
						</div>
						<div class="c x2b y3b wd h1b">
							<div class="t m0 x2a h1c y38 ff12 fsc fc0 sc0 lsa">F7</div>
						</div>
						<div class="c x2b y3c wd h1d">
							<div class="t m0 x2a h1e y3a ff12 fsd fc0 sc0 lsa">F8</div>
						</div>
						<div class="c x26 y3d wf h1b">
							<div class="t m0 x2a h1c y38 ff12 fsc fc0 sc0 lsa">F9</div>
						</div>
						<div class="c x26 y3e w10 h1f">
							<div class="t m0 x8 h20 y3f ff12 fse fc0 sc0 lsa">
								sjdkjsdjnfsjdhsidkdslskdhshiodhfi
							</div>
						</div>
						<div class="c x9 y3e w11 h1f">
							<div class="t m0 x2c h20 y3f ff12 fse fc0 sc0 lsa">F13</div>
						</div>
						<div class="c xc y3e w12 h1f">
							<div class="t m0 x2a h20 y3f ff12 fse fc0 sc0 lsa">F14</div>
						</div>
						<div class="c xe y3e w13 h1f">
							<div class="t m0 x23 h20 y3f ff12 fse fc0 sc0 lsa">F15</div>
						</div>
						<div class="c x2d y40 w14 h21">
							<div class="t m0 x2e h22 y41 ff12 fsf fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x2d y42 w15 h21">
							<div class="t m0 x2e h22 y41 ff12 fsf fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x2d y43 w16 h21">
							<div class="t m0 x2e h22 y41 ff12 fsf fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x2d y44 w17 h21">
							<div class="t m0 x2e h22 y41 ff12 fsf fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x2d y45 w18 h21">
							<div class="t m0 x2e h22 y41 ff12 fsf fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x2d y46 w19 h21">
							<div class="t m0 x2e h22 y41 ff12 fsf fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x2d y47 w1a h21">
							<div class="t m0 x2f h22 y41 ff12 fsf fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x2d y48 w1b h21">
							<div class="t m0 x2f h22 y41 ff12 fsf fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x2d y49 w1c h21">
							<div class="t m0 x2f h22 y41 ff12 fsf fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x30 y4a w1d h23">
							<div class="t m0 x31 h24 y4b ff12 fs10 fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x32 y4c w1e h25">
							<div class="t m0 x31 h26 y4d ff12 fs11 fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x32 y4e w1e h27">
							<div class="t m0 x2e h28 y4f ff12 fs12 fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x33 y50 w1f h29">
							<div class="t m0 x34 h2a y51 ff12 fs13 fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
						<div class="c x35 y52 w20 h2b">
							<div class="t m0 x0 h2c y53 ff12 fs1 fc0 sc0 lsa ws12">
								Select Your Location
							</div>
						</div>
						<div class="c x1 y54 w21 h2d">
							<div class="t m0 x2a h2e y55 ff12 fs14 fc0 sc0 lsa ws12">
								<span class="_ _2"></span>F21
							</div>
						</div>
						<div class="c x1 y56 w21 h2d">
							<div class="t m0 x2a h2e y55 ff12 fs14 fc0 sc0 lsa ws12"></div>
						</div>
						<div class="c x1 y57 w22 h2d">
							<div class="t m0 x0 h2e y55 ff12 fs14 fc0 sc0 lsa ws12"></div>
						</div>
						<div class="c x1 y58 w23 h2d">
							<div class="t m0 x0 h2e y55 ff12 fs14 fc0 sc0 lsa ws12"></div>
						</div>
						<div class="c x1 y59 w23 h2d">
							<div class="t m0 x0 h2e y55 ff12 fs14 fc0 sc0 lsa ws12"></div>
						</div>
						<div class="c x36 y5a w1c h21">
							<div class="t m0 x2f h22 y41 ff12 fsf fc0 sc0 lsa ws12">
								$ 0.00
							</div>
						</div>
					</div>
					<div
						class="pi"
						data-data='{"ctm":[1.000000,0.000000,0.000000,1.000000,0.000000,0.000000]}'></div>
				</div>
			</div>
			<div class="loading-indicator">
				<img
					alt=""
					src="data:image/png;base64,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"
				/>
			</div>
		</div>
	);
};

export default Pdf;
