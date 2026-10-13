# Writes the comparison into src/i18n/pt-BR.ts and src/i18n/en.ts from
# compare_data.py, one table for both languages. Run from the repo root:
#   python3 scripts/compare/emit.py && npm run build
import json, re, sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
exec(open(os.path.join(HERE, 'compare_data.py'), encoding='utf-8').read())
SITE = os.path.join(HERE, '..', '..', 'src', 'i18n') + os.sep
MK={'Y':'yes','P':'partial','N':'no','I':'info'}
def j(x): return json.dumps(x, ensure_ascii=False)
def block(L, li):
    o=[]
    o.append('  // Generated from one table for both languages (the comparison of 2026-10-13);')
    o.append('  // every claim and its source in verso-competitive/validacao.md. Never a price.')
    o.append('  compare: {')
    o.append(f'    title: {j(L["title"])},')
    o.append('    introHtml: [')
    for p in L['intro']: o.append(f'      {j(p)},')
    o.append('    ],')
    o.append(f'    pains: {{\n      title: {j(L["painsTitle"])},\n      items: [')
    for lead, t in L['pains']: o.append(f'        {{ lead: {j(lead)}, textHtml: {j(t)} }},')
    o.append('      ],\n    },')
    o.append(f'    tableCaption: {j(L["caption"])},')
    o.append(f'    scrollHint: {j(L["hint"])},')
    m=L['marks']
    o.append('    marks: {')
    for k in ['yes','partial','no','info']: o.append(f'      {k}: {{ symbol: {j(m[k][0])}, word: {j(m[k][1])} }},')
    o.append('    },')
    o.append(f'    capability: {j(L["capability"])},')
    o.append('    groups: [' + ', '.join(f'{{ id: {j(gid)}, label: {j(a)}, span: {b} }}' for gid,(a,b) in zip(TOOL_GROUP_IDS, L['groups'])) + '],')
    o.append('    tools: [')
    for name, href, npt, nen in TOOLS:
        note = npt if li==0 else nen
        tid = TOOL_IDS[name]
        if href: o.append(f'      {{ id: {j(tid)}, name: {j(name)}, href: {j(href)}, note: {j(note)} }},')
        else: o.append(f'      {{ id: {j(tid)}, name: {j(name)}, note: {j(note)} }},')
    o.append('    ],')
    o.append('    rowGroups: [')
    for gid, a, b in ROW_GROUPS: o.append(f'      {{ id: {j(gid)}, label: {j(a if li==0 else b)} }},')
    o.append('    ],')
    order = [g[0] for g in ROW_GROUPS]
    rows = sorted(ROWS, key=lambda r: order.index(ROW_GROUP_OF[r[0][0]]))
    o.append('    rows: [')
    for labels, cells in rows:
        o.append(f'      {{\n        group: {j(ROW_GROUP_OF[labels[0]])},\n        label: {j(labels[li])},\n        cells: [')
        for c in cells: o.append(f'          {{ mark: "{MK[c[0]]}", text: {j(c[1+li])} }},')
        o.append('        ],\n      },')
    o.append('    ],')
    C = PT_CONTROLS if li==0 else EN_CONTROLS
    o.append('    controls: {')
    for k in ['label','presetsLabel']: o.append(f'      {k}: {j(C[k])},')
    o.append('      presets: [' + ', '.join(f'{{ id: {j(a)}, label: {j(b)} }}' for a,b in C['presets']) + '],')
    for k in ['toolsLabel','capsLabel','diff','diffHint','reset','count']: o.append(f'      {k}: {j(C[k])},')
    o.append('    },')
    o.append(f'    legendHtml: {j(L["legend"])},')
    o.append(f'    verified: {j(L["verified"])},')
    o.append('  },')
    return '\n'.join(o)+'\n'
for fname, L, li, nav, cid in [('pt-BR.ts', PT, 0, 'Comparativo', 'comparativo'), ('en.ts', EN, 1, 'Compare', 'compare')]:
    p=SITE+fname; s=open(p, encoding='utf-8').read()
    s=re.sub(r'\n  // Generated from one table.*?\n  },\n(?=  faq: \{)', '\n', s, flags=re.S)
    assert '  faq: {' in s
    s=s.replace('  faq: {', block(L, li)+'  faq: {',1)
    if 'compare:' not in s.split('switchTo')[0]:
        s=re.sub(r'(    notYet: "[^"]*",\n)', r'\1    compare: "'+nav+'",\n', s, count=1)
    if 'compare: "'+cid+'"' not in s:
        s=s.replace('faq: "', 'compare: "'+cid+'", faq: "', 1) if False else re.sub(r'(ids: \{[^}]*?notYet: "[^"]*", )', r'\1compare: "'+cid+'", ', s)
    open(p,'w',encoding='utf-8').write(s)
print('ok')
