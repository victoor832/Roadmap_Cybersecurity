#!/usr/bin/env python3
import os
import sys
import re
from pathlib import Path

def replace_header_in_file(file_path):
    """
    Elimina cualquier cabecera frontmatter existente y añade una nueva con ID único.
    """
    # Obtener folder name y filename sin extensión
    folder_name = os.path.basename(os.path.dirname(file_path))
    file_name = os.path.basename(file_path).replace('.md', '')
    
    # Crear un ID único usando solo el nombre del archivo
    unique_id = f"{file_name.lower().replace(' ', '-').replace('_', '-')}"
    
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Comprobar si ya tiene una cabecera frontmatter (entre ---)
    frontmatter_pattern = re.compile(r'^---\s*\n.*?\n---\s*\n', re.DOTALL)
    match = frontmatter_pattern.search(content)
    
    if match:
        # Eliminar la cabecera existente
        content = content[match.end():]
        print(f"🗑️ Eliminada cabecera existente de: {file_path}")
    
    # Crear nueva cabecera
    header = f"""---
id: {unique_id}
title: {file_name}
sidebar_label: {file_name}
---

"""
    # Añadir la nueva cabecera al contenido
    new_content = header + content
    
    # Escribir el archivo con la nueva cabecera
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(new_content)
    
    print(f"✅ Añadida nueva cabecera a: {file_path}")
    print(f"   ID: {unique_id}")
    print(f"   Title: {file_name}")
    return True

def process_files(single_file=None):
    """
    Procesa todos los archivos .md o un archivo específico.
    """
    modified_count = 0
    
    if single_file:
        # Procesar solo un archivo para pruebas
        if os.path.exists(single_file) and single_file.endswith('.md'):
            if replace_header_in_file(single_file):
                modified_count += 1
        else:
            print(f"❌ Archivo no encontrado o no es un archivo .md: {single_file}")
    else:
        # Procesar todos los archivos .md en la carpeta actual y subcarpetas
        for root, _, files in os.walk('.'):
            for file in files:
                if file.endswith('.md'):
                    file_path = os.path.join(root, file)
                    if replace_header_in_file(file_path):
                        modified_count += 1
    
    print(f"\n📝 Total de archivos modificados: {modified_count}")

if __name__ == "__main__":
    # Comprobar si se ha proporcionado un archivo específico como argumento
    if len(sys.argv) > 1:
        process_files(sys.argv[1])
    else:
        # Confirmar antes de procesar todos los archivos
        confirm = input("⚠️ Este script REEMPLAZARÁ cualquier cabecera existente. ¿Continuar? (s/n): ")
        if confirm.lower() in ['s', 'si', 'sí', 'y', 'yes']:
            process_files()
        else:
            print("Operación cancelada.")
