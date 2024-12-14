import { CommonTable, DetailsLayout, ListLayout, ViewMode } from "../../../common";
import { SubjectDetails } from "./subjects-details";

interface SubjectsListProps{
    viewMode:ViewMode;
    setViewMode:
}

export const SubjectsList = () => {
  return (
    <>
      <ListLayout
        searchBar={
          viewMode === ViewMode.LIST && (
            <SearchBar
              filter={filterData}
              setFilter={setFilterData}
              searchArea={searchArea()}
              searchPanel={searchArea()}
            />
          )
        }
        viewMode={viewMode}
      >
        <CommonTable
          key={"idNum"}
          columns={listColumns()}
          viewMode={viewMode}
          dataSource={studentList.content}
          totalSize={studentList.totalSize}
          pageNumber={studentList.pageNumber}
          pageSize={filterData.pageSize}
          onPaginationChange={(page: number, pageSize: number) =>
            commonPaginationChangeHandler(
              page,
              pageSize,
              filterData,
              fetchListHandler
            )
          }
        />
      </ListLayout>
      <DetailsLayout
        showHeader={true}
        title={detailTitleHandler()}
        viewMode={viewMode}
      >
        <SubjectDetails />
      </DetailsLayout>
    </>
  );
};
