
import re

try:
    with open('artifact1.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find raw text from next js chunks or something
    print('Checking artifact1.html size:', len(content))
except Exception as e:
    pass

try:
    with open('content clude.txt', 'r', encoding='utf-8') as f:
        content = f.read()
    print('Found content clude.txt')
except Exception as e:
    pass

