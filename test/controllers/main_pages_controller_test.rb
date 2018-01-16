require 'test_helper'

class MainPagesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get main_pages_index_url
    assert_response :success
  end

  test "should get create" do
    get main_pages_create_url
    assert_response :success
  end

  test "should get new" do
    get main_pages_new_url
    assert_response :success
  end

  test "should get show" do
    get main_pages_show_url
    assert_response :success
  end

  test "should get delete" do
    get main_pages_delete_url
    assert_response :success
  end

end
