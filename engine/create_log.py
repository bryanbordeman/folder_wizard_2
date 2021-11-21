# import sys
# from create_opportunity import create_opportunity
# from zip_2_state import find_state
from openpyxl import load_workbook
import os
import os.path
import sys
import time
import datetime
import json

def main():
    # create_log()
    inputs = sys.argv[1] # input string
    inputDict = eval('dict('+inputs+')') # convert input string into dict
    create_log(inputDict)
    # print(quoteLog)
    # print(inputDict["quote_number"])
    # print(sys.argv[1])
    # print('creating log')

def create_log(inputs):
        '''update quote log'''
        log = inputs['log']
        book = load_workbook(log)
        ws = book.worksheets[0]
        for cell in ws["A"]:
            if cell.value is None:
                print(cell.row)
                current_row = cell.row
                break
        else:
            cell.row + 1

        ws[f'A{current_row}'] = inputs['quote_number']
        ws[f'B{current_row}'] = inputs['manager']
        ws[f'C{current_row}'] = time.strftime("%D")
        ws[f'D{current_row}'] = f'{inputs["project_name"]} {inputs["type_code"]}'
        ws[f'E{current_row}'] = inputs['project_location']
        ws[f'F{current_row}'] = inputs['due_date']

        book.save(log)
        book.close()
    
if __name__ == "__main__":
    main()