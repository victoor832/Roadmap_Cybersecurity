import os
import re
import deepl
import argparse

def translate_md_file(api_key, input_file, output_file):
    """
    Traduce un archivo Markdown de español a inglés (US) usando DeepL API.
    
    Args:
        api_key (str): Clave de API de DeepL
        input_file (str): Ruta al archivo Markdown en español
        output_file (str): Ruta donde guardar el archivo traducido
    """
    # Inicializar el cliente DeepL
    translator = deepl.Translator(api_key)
    
    # Leer el contenido del archivo
    with open(input_file, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Patrones a preservar (código, enlaces, etc.)
    code_blocks = re.findall(r'```[\s\S]*?```', content)
    inline_codes = re.findall(r'`[^`]+`', content)
    links = re.findall(r'\[([^\]]+)\]\(([^)]+)\)', content)
    images = re.findall(r'!\[([^\]]*)\]\(([^)]+)\)', content)
    
    # Reemplazar temporalmente los elementos a preservar
    placeholder_map = {}
    
    for i, block in enumerate(code_blocks):
        placeholder = f"CODE_BLOCK_{i}"
        placeholder_map[placeholder] = block
        content = content.replace(block, placeholder)
    
    for i, code in enumerate(inline_codes):
        placeholder = f"INLINE_CODE_{i}"
        placeholder_map[placeholder] = code
        content = content.replace(code, placeholder)
    
    for i, link in enumerate(links):
        text, url = link
        original = f"[{text}]({url})"
        placeholder = f"LINK_{i}"
        placeholder_map[placeholder] = original
        content = content.replace(original, placeholder)
    
    for i, img in enumerate(images):
        alt, src = img
        original = f"![{alt}]({src})"
        placeholder = f"IMAGE_{i}"
        placeholder_map[placeholder] = original
        content = content.replace(original, placeholder)
    
    # Traducir el contenido
    result = translator.translate_text(
        content,
        source_lang="EN",
        target_lang="ES"
    )
    
    translated_content = result.text
    
    # Restaurar los elementos preservados
    for placeholder, original in placeholder_map.items():
        translated_content = translated_content.replace(placeholder, original)
    
    # Guardar el contenido traducido
    with open(output_file, 'w', encoding='utf-8') as file:
        file.write(translated_content)
    
    print(f"Traducción completada. Archivo guardado como: {output_file}")

if __name__ == "__main__":
    # API key predeterminada (reemplaza con tu propia API key)
    DEFAULT_API_KEY = "e644bc2e-221c-445e-9709-0bc53e7a10e2:fx"
    
    parser = argparse.ArgumentParser(description='Traduce un archivo Markdown de español a inglés (US) usando DeepL')
    parser.add_argument('--api-key', default=DEFAULT_API_KEY, help='Tu clave de API de DeepL (opcional si usas la predeterminada)')
    parser.add_argument('-i', '--input', dest='input', required=True, help='Ruta al archivo Markdown en español')
    parser.add_argument('-o', '--output', dest='output', required=True, help='Ruta donde guardar el archivo traducido')
    
    args = parser.parse_args()
    
    translate_md_file(args.api_key, args.input, args.output)
