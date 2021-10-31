from database import execute_db_query

from folder_wizard_2 import Opportunity
from get_next_num import get_next_num

def main():

    quote = Opportunity()
    quote.quote_number = get_next_num('opportunity')
    quote.project_name = "Test project"
    quote.project_category = "MRI"
    quote.project_type = "Siemens"
    quote.type_code = 'MRI-SEM'
    quote.project_zip = "07004"
    quote.customer_list = ['Global Shielding', 'GPS']
    quote.manager = "BB"
    quote.bid_due = '10/30/21'
    # write_data(quote)
    print(quote.quote_number)


def write_data(data, data_type):
    '''write data to database'''
    table = data_type

    if data_type == 'opportunity':
        execute_db_query(f"""INSERT INTO {table} (
                                    quote_number,
                                    project_name,
                                    project_category,
                                    project_type,
                                    type_code,
                                    project_zip,
                                    customer_list,
                                    bid_due
                                    ) VALUES(?, ?, ?, ?, ?, ?, ?, ?);""", 
                                    (str(data.quote_number), 
                                    str(data.project_name), 
                                    str(data.project_category), 
                                    str(data.project_type), 
                                    str(data.type_code), 
                                    str(data.project_zip), 
                                    str(data.customer_list), 
                                    str(data.bid_due)))
    elif data_type == 'project':
        execute_db_query(f"""INSERT INTO {table} (
                                    project_number,
                                    project_name,
                                    project_category,
                                    project_type,
                                    type_code,
                                    project_zip,
                                    customer,
                                    quote,
                                    terms,
                                    tax,
                                    billing,
                                    labor_code,
                                    order_type,
                                    price
                                    ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);""", 
                                    (str(data.project_number),
                                    str(data.project_name),
                                    str(data.project_category),
                                    str(data.project_type),
                                    str(data.type_code),
                                    str(data.project_zip),
                                    str(data.customer),
                                    str(data.quote),
                                    str(data.terms),
                                    str(data.tax),
                                    str(data.billing),
                                    str(data.labor_code),
                                    str(data.order_type),
                                    str(data.price)))



if __name__ == "__main__":
    main()